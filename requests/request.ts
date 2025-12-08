import { PRODUCTS_URL } from "@/constants/url";
import { CATEGORIES_URL } from "@/constants/url";

export const fetchCategory = async()=>{
    const response = await fetch(CATEGORIES_URL);
    const data = await response.json();
    return data;
}


export const fetchProducts = async () => {
  const res = await fetch(PRODUCTS_URL, {
    cache: "no-store"
  });

  if (!res.ok) {
    console.error("API error", res.status);
    return [];
  }

  try {
    return await res.json();
  } catch {
    return [];
  }
};

export const singleProduct = async (id: string) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  const data = await response.json();
  return data;
};



