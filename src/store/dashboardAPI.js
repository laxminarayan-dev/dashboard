const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const initialData = {
    kpiData: [],
    chartData: {
        cashFlow: [],
        topSelling: []
    },
    tablesData: {
        recentOrdersData: [],
        recentTransactionsData: []
    }
}

const fetchDashboardData = async () => {
    try {
        const res = await fetch(
            `${BACKEND_URL}/api/dashboard-data`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                cache: "no-store",
            }
        );

        return await res.json();
    } catch (error) {
        console.log(error);
        return initialData;
    }
}

export default fetchDashboardData