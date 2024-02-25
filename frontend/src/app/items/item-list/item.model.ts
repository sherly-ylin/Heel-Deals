
export enum Category{
    Book = "Book",
    Clothing = "Clothing",
    Furniture = "Furniture",
    Technology = "Technology",
    Other = "Other"
}



export interface Item {
    id: number;
    name: string;
    cost: number;
    description: string;
    // category: Category;
}