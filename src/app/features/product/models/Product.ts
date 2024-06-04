import { Category } from "../../category/models/Category";

export interface Product{
    id:string;
    description:string;
    stock:number;
    price:number;
    imageURL:string;
    createdDate: string;
    category: Category;
}