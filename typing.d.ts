import { JSX } from "react/jsx-runtime";

export type Product = {
    map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
    id:number;
    title:string;
    category:string;
    description:string;
    price:number;
    image:string;
    rating:{
        rate:number;
        count:number;
    }  
}