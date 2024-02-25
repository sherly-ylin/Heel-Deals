
export enum Category{
    Book = "Book",
    Clothing = "Clothing",
    Furniture = "Furniture",
    Technology = "Technology",
    Other = "Other"
}



export interface ItemData {
    id: string | null;
    name: string;
    cost: number;
    description: string;
    category: string;
}

export interface ItemResponse {
    id: string;
    name: string;
    cost: number;
    description: string;
    category: number;
    user_id: string;
}