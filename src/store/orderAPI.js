import { ordersInitialData } from "@/lib/initialData";

export const fetchAllOrder = async () => {
    try {
        const res = await fetch(`http://localhost:8000/api/orders`, {
            cache: "no-store",
        });
        return await res.json();
    } catch (err) {
        return [];
    }
};


export const fetchOneOrder = async (orderID) => {
    try {
        const res = await fetch(`http://localhost:8000/api/orders/${orderID}`, {
            cache: "no-store",
        });
        return await res.json();
    } catch (error) {
        return ordersInitialData;
    }
};