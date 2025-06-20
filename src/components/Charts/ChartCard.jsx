"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TriangleAlert, ChartColumnBig } from "lucide-react";
// --- Reusable Components for States (No changes needed here) ---

const EmptyState = React.memo(({ message, icon }) => (
  <div className="flex flex-col items-center justify-center h-full text-slate-500">
    {icon}
    <p className="mt-4 text-lg font-medium">{message}</p>
  </div>
));

const LoadingSkeleton = React.memo(() => (
  <div
    className="w-full h-full animate-pulse"
    role="status"
    aria-label="Loading chart"
  >
    <div className="relative w-full h-full">
      <div className="absolute top-0 bottom-6 left-4 w-px bg-slate-700"></div>
      <div className="absolute bottom-6 left-4 right-0 h-px bg-slate-700"></div>
      <div className="absolute bottom-6 left-10 right-4 h-[calc(100%-24px)] flex items-end justify-around gap-2">
        <div className="w-full h-[40%] bg-slate-700 rounded-t-md"></div>
        <div className="w-full h-[60%] bg-slate-700 rounded-t-md"></div>
        <div className="w-full h-[75%] bg-slate-700 rounded-t-md"></div>
        <div className="w-full h-[30%] bg-slate-700 rounded-t-md"></div>
        <div className="w-full h-[50%] bg-slate-700 rounded-t-md"></div>
        <div className="w-full h-[80%] bg-slate-700 rounded-t-md"></div>
        <div className="w-full h-[65%] bg-slate-700 rounded-t-md"></div>
      </div>
      <div className="absolute bottom-0 left-10 right-4 h-4 flex justify-around">
        <div className="w-8 h-2 rounded bg-slate-700"></div>
        <div className="w-8 h-2 rounded bg-slate-700"></div>
        <div className="w-8 h-2 rounded bg-slate-700"></div>
        <div className="w-8 h-2 rounded bg-slate-700"></div>
      </div>
    </div>
  </div>
));

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref, isVisible];
};

const sampleData = (data, maxPoints) => {
  if (!data || data.length <= maxPoints) return data;
  const step = Math.ceil(data.length / maxPoints);
  return data.filter((_, index) => index % step === 0);
};

const ChartCard = ({
  title,
  type,
  data,
  dataKey,
  categoryKey,
  isLoading = false,
  error = null,
  colors = ["#6366f1", "#16a34a", "#ef4444", "#c7d2fe"],
  maxDataPoints = 100,
}) => {
  const observerOptions = useMemo(
    () => ({ threshold: 0.1, rootMargin: "50px" }),
    []
  );
  const [containerRef, isVisible] = useIntersectionObserver(observerOptions);

  // **PERFORMANCE FIX 1: New state to control the final, expensive render.**
  // This state will be true only AFTER the component is visible AND the browser has had a moment to breathe.
  const [isReadyToRender, setIsReadyToRender] = useState(false);

  const processedData = useMemo(() => {
    return sampleData(data, maxDataPoints);
  }, [data, maxDataPoints]);

  // **PERFORMANCE FIX 2: The Deferral Effect**
  // This effect waits for the component to be visible and not in a loading state.
  // Then, it uses a setTimeout(0) to push the expensive state update (and subsequent render)
  // to the next event loop cycle. This unblocks the main thread, allowing LCP to paint quickly.
  useEffect(() => {
    if (isVisible && !isLoading) {
      const timerId = setTimeout(() => {
        setIsReadyToRender(true);
      }, 0); // Defer to the next browser task queue
      return () => clearTimeout(timerId);
    }
  }, [isVisible, isLoading]);

  const renderChart = useCallback(() => {
    if (!Array.isArray(dataKey) || dataKey.length === 0) {
      return (
        <EmptyState
          message="Chart configuration error."
          icon={<TriangleAlert size={40} />}
        />
      );
    }

    // **PERFORMANCE FIX 3: Optimize X-Axis interval.**
    // `interval={0}` is a performance killer as it tries to render every label.
    // 'auto' or a calculated value is much better. Let's calculate a sensible default.
    const tickInterval =
      processedData && processedData.length > 10
        ? Math.floor(processedData.length / 7) // Show ~7 ticks for larger datasets
        : 0; // Show all for small datasets

    const commonXAxisProps = {
      dataKey: categoryKey,
      stroke: "#94a3b8",
      tick: { fontSize: 14 },
      angle: -30,
      textAnchor: "end",
      interval: tickInterval,
    };

    const CustomBar = (props) => {
      const { x, y, width, height, fill } = props;

      return (
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={fill + "90"}
          stroke={fill} // Border color
          strokeWidth={2} // Border width
          ry={5}
        />
      );
    };

    switch (type) {
      case "line":
        return (
          <LineChart
            data={processedData}
            margin={{ top: 5, right: 20, left: 0, bottom: 35 }}
          >
            <CartesianGrid strokeDasharray="2 2" stroke="#33415540" />
            <XAxis {...commonXAxisProps} />
            <YAxis stroke="#94a3b8" tick={{ fontSize: 14 }} />
            <Tooltip
              cursor={false}
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "1px solid #334155",
                borderRadius: "8px",
              }}
            />
            <Legend verticalAlign="top" height={36} />
            {dataKey.map((key, index) => (
              <Line
                key={key}
                type="natural"
                dataKey={key}
                stroke={colors[index + 1]}
                strokeWidth={2}
              />
            ))}
          </LineChart>
        );

      case "bar":
        return (
          <BarChart
            data={processedData}
            margin={{ top: 5, right: 0, left: 0, bottom: 35 }}
          >
            <CartesianGrid strokeDasharray="2 2" stroke="#33415540" />
            <XAxis {...commonXAxisProps} />
            <YAxis stroke="#94a3b8" tick={{ fontSize: 14 }} />
            <Tooltip
              cursor={false}
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "1px solid #334155",
                borderRadius: "8px",
              }}
            />
            <Legend verticalAlign="top" height={36} />
            {dataKey.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                fill={colors[index % colors.length]}
                shape={<CustomBar />}
              />
            ))}
          </BarChart>
        );
      default:
        return (
          <EmptyState
            message="Invalid chart type."
            icon={<TriangleAlert size={40} />}
          />
        );
    }
  }, [processedData, type, dataKey, categoryKey, colors]);

  const renderContent = () => {
    if (isLoading) return <LoadingSkeleton />;
    if (error)
      return <EmptyState message={error} icon={<TriangleAlert size={40} />} />;
    if (!processedData || processedData.length === 0)
      return (
        <EmptyState
          message="No data to display."
          icon={<ChartColumnBig size={40} />}
        />
      );

    // **PERFORMANCE FIX 4: The final gate.**
    // The chart will NOT render until it's both visible AND "ready".
    // Until then, we show the lightweight skeleton, which does not block the main thread.
    if (!isReadyToRender) {
      return <LoadingSkeleton />;
    }

    return (
      <ResponsiveContainer width="100%" height="100%">
        {renderChart()}
      </ResponsiveContainer>
    );
  };

  return (
    <div ref={containerRef} className="col-span-12 lg:col-span-6 w-full">
      <div className="bg-white text-white font-semibold font-mono px-5 py-4 rounded-lg shadow-sm ">
        <h1 className="font-bold text-xl text-slate-800  mb-4">{title}</h1>
        <div className="h-[300px]">{renderContent()}</div>
      </div>
    </div>
  );
};

export default React.memo(ChartCard);
