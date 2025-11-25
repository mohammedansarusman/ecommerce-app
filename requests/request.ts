import { PRODUCTS_URL } from "@/constants/url";
import { CATEGORIES_URL } from "@/constants/url";

export const fetchCategory = async()=>{
    const response = await fetch(CATEGORIES_URL);
    const data = await response.json();
    return data;
}

export const fetchProducts = async() =>{
    const response = await fetch(PRODUCTS_URL)
    const data = await response.json();
    return data;
}