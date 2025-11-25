import React from "react";
import { fetchProducts } from "@/requests/request";
import { Product } from "@/typing";

const AllProducts = async () => {
  const products: Product = await fetchProducts();
  console.log("products=>", products);
  return <div className="pt-16 pb-12">
    <h1 className="font-bold text-2xl text-center capitalize ">All Products</h1>
    
  </div>;
};

export default AllProducts;
  