/** Interface for ItemData type, used on frontend for requests */
export interface ItemData {
    id: number;
    name: string;
    cost: number;
    description: string;
    // category: string;
}

export interface ItemResponse {
    id: number;
    name: string;
    cost: number;
    description: string;
    user_id: string;
    // category: string;
}

/** for frontend */
export interface UserData {
    id: number;
    pid: number;
    onyen: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
}

export interface UserResponse {
    id: number;
    pid: number;
    onyen: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
}


