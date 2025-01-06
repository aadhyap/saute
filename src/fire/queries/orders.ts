// fire/queries/orders.ts
import { collection, getDocs, getFirestore, addDoc, doc, updateDoc, onSnapshot, QuerySnapshot, DocumentData, Timestamp, deleteDoc } from "firebase/firestore";
import firebase_app from "@/fire/config";
import { Order } from "@/utils/types";

const db = getFirestore(firebase_app);

// Retrieve all orders
export const getAllOrders = async (): Promise<Order[]> => {
    try {
        const ordersCollection = collection(db, "orders");
        const querySnapshot = await getDocs(ordersCollection);
        const orders: Order[] = [];
        querySnapshot.forEach((docSnap) => {
            orders.push({ id: docSnap.id, ...docSnap.data() } as Order);
        });
        return orders;
    } catch (error) {
        console.error("Error retrieving orders data:", error);
        return [];
    }
};

// Create a new order
export const createOrder = async (orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<void> => {
    try {
        const timestamp = Timestamp.fromDate(new Date());
        await addDoc(collection(db, "orders"), {
            ...orderData,
            createdAt: timestamp,
            updatedAt: timestamp,
        });
    } catch (error) {
        console.error("Error creating order:", error);
        throw error;
    }
};

// Delete an order
export const deleteOrder = async (orderId: string): Promise<void> => {
    try {
        const orderRef = doc(db, "orders", orderId);
        await deleteDoc(orderRef);
    } catch (error) {
        console.error("Error deleting order:", error);
        throw error;
    }
};

// Update an order
export const updateOrder = async (orderId: string, updatedData: Partial<Order>): Promise<void> => {
    try {
        const timestamp = Timestamp.fromDate(new Date());

        const orderRef = doc(db, "orders", orderId);
        await updateDoc(orderRef, {
            ...updatedData,
            updatedAt: timestamp,
        });
    } catch (error) {
        console.error("Error updating order:", error);
        throw error;
    }
};

// Subscribe to real-time updates
export const subscribeToOrders = (callback: (snapshot: QuerySnapshot<DocumentData>) => void): (() => void) => {
    const ordersCollection = collection(db, "orders");
    const unsubscribe = onSnapshot(ordersCollection, callback);
    return unsubscribe;
};
