import { ordersInitialData } from "@/lib/initialData";
import BACKEND_URL from "@/lib/env";

export const fetchAllOrder = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}/api/orders`, {
            cache: "no-store",
        });
        return await res.json();
    } catch (err) {
        return [];
    }
};


export const fetchOneOrder = async (orderID) => {
    try {
        const res = await fetch(`${BACKEND_URL}/api/orders/${orderID}`, {
            cache: "no-store",
        });
        return await res.json();
    } catch (error) {
        return ordersInitialData;
    }
};