import { PRODUCTS_URL } from "@/constants/url";
import { CATEGORIES_URL } from "@/constants/url";

export const fetchCategory = async()=>{
    const response = await fetch(CATEGORIES_URL);
    const data = await response.json();
    return data;
}

export const fetchProducts = async() =>{
    const response = await fetch(PRODUCTS_URL,{cache: "no-store"})
    const data = await response.json();
    return data;
}
export const singleProduct = async(id:string) =>{

    const response = await fetch(`${PRODUCTS_URL}/${id}`)
    const data = await response.json();
    return data;
}

