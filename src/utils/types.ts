import { Timestamp } from "firebase/firestore";

// types.ts
export default interface AppUser {
    uid: string;
    email: string | null;
    displayName: string | null;
    firstName: string | null;
    lastName: string | null;
    photoURL: string | null;
    roles: string[] | null; // user | admin
    lastLogin: Timestamp;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

export interface Order {
    id: string;
    orderId: string;
    userId: string;
    address: string;
    flavors: string[];
    quantity: number;
    timeSlot: string;
    status: 'pending' | 'preparing' | 'out-for-delivery' | 'delivered' | 'canceled';
    assignedDriverId?: string;
    deliveryClusterId?: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}