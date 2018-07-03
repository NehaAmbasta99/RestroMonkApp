import { ICategory } from "src/app/_models/category";

export interface IMenu{
    menuId:number;
    menuName:string;
    menuQuantity:number;
    menuPrice:number;
    category:ICategory;    
}