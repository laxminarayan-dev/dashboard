import { transactionsInitialData } from "@/lib/initialData";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export const fetchAllTransaction = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/transactions`, {
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
      `${BACKEND_URL}/api/transactions/${transactionId}`,
      {
        cache: "no-store",
      }
    );
    return await res.json();
  } catch (error) {
    return transactionsInitialData;
  }
};
