import React from "react";
import { fetchProducts } from "@/requests/request";
import { Product } from "@/typing";
import { Loader } from "lucide-react";
import ProductCard from "./ProductCard";

const AllProducts = async () => {
  const products: Product = await fetchProducts();
  console.log("products=>", products);
  return (
    <div className="pt-16 pb-12">
      <h1 className="font-bold text-2xl text-center capitalize ">
        All Products
      </h1>
      <div className="w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <ProductCard product={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
