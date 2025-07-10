"use client";
import {
  CheckCheck,
  IndianRupee,
  Landmark,
  TimerReset,
  Link2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TransactionActions from "@/components/Transactions/TransactionActions";
import { fetchOneTransaction } from "@/store/transactionAPI";
import { transactionsInitialData as initialData } from "@/lib/initialData";

const TransactionDetail = () => {
  const [data, setData] = useState(initialData);
  const params = useParams();
  const loadData = async (transactionId) => {
    const transaction = await fetchOneTransaction(transactionId);
    setData(transaction);
  };
  useEffect(() => {
    const transactionId = params.id;
    loadData(transactionId);
  }, []);

  return (
    <div className="p-6 max-w-2xl w-full">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4 border-b pb-2">
        🧾 Transaction Summary
      </h2>

      <div className="space-y-4 text-gray-800">
        {/* Transaction ID */}
        <div className="bg-gray-100 rounded-xl">
          <p className="text-xs text-gray-500">Transaction ID</p>
          <p className="font-semibold text-lg">{data.transactionId}</p>
        </div>
        {/* Grid Info */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-sm rounded-lg p-3 border">
            <p className="text-xs text-gray-500">Payer / Recipient</p>
            <p className="font-medium">{data.userName}</p>
          </div>
          <div className="bg-white shadow-sm rounded-lg p-3 border">
            <p className="text-xs text-gray-500">Amount</p>
            <div className="flex items-center gap-1 text-green-700 font-semibold">
              <IndianRupee className="w-4 h-4" />
              {data.amount}
            </div>
          </div>
          <div className="bg-white shadow-sm rounded-lg p-3 border">
            <p className="text-xs text-gray-500">Transaction Type</p>
            <p className="font-medium">{data.type}</p>
          </div>
          <div className="bg-white shadow-sm rounded-lg p-3 border">
            <p className="text-xs text-gray-500">Status</p>
            <div className="flex items-center gap-2 text-emerald-600 font-medium">
              <CheckCheck className="w-4 h-4" />
              {data.status}
            </div>
          </div>
        </div>

        {/* Meta Info */}
        <div className="space-y-3 text-sm text-gray-700 bg-gray-50 p-4 rounded-xl border">
          <div className="flex items-center gap-2">
            <TimerReset className="w-4 h-4 text-indigo-600" />
            <span>
              Transaction Date & Time:{" "}
              <strong className="text-gray-900">
                {data.transactionDateTime}
              </strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Landmark className="w-4 h-4 text-indigo-600" />
            <span>
              Method: <strong className="text-gray-900">{data.method}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link2 className="w-4 h-4 text-indigo-600" />
            <span>
              UTR / Reference:{" "}
              <strong className="text-gray-900">{data.reference}</strong>
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <TransactionActions data={data} onTransactionUpdate={loadData} />
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;
