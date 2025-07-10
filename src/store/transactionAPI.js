import { transactionsInitialData } from "@/lib/initialData";

export const fetchAllTransaction = async () => {
  try {
    const res = await fetch(`http://localhost:8000/api/transactions`, {
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    return [];
  }
};
export const fetchOneTransaction = async (transactionId) => {
  try {
    const res = await fetch(
      `http://localhost:8000/api/transactions/${transactionId}`,
      {
        cache: "no-store",
      }
    );
    return await res.json();
  } catch (error) {
    return transactionsInitialData;
  }
};
