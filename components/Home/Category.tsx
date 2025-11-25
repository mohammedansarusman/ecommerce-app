import React from "react";
import { fetchCategory } from "@/requests/request";

const Category = async () => {
  const result: string[] = await fetchCategory();
  console.log("result=>", result);
  return (
    <div className="pt-16 px-12">
      <h1 className="text-center capitalize font-bold text-2xl">
        Shop by Category
      </h1>
      {/* define grid */}
      <div className="mt-12 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-4 xl:grid-col-4 gap-8">
        {result.map((item) => (
          <div
            key={item}
            className="p-6 rounded-lg cursor-pointer text-center bg-gray-200 hover:scale-110 transition-all duration-300"
          >
            <h1 className="text-sm sm:text-base md:text-lg capitalize font-bold">{item}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
