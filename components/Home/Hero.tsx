import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-12vh)] flex flex-col justify-center items-center">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-rose-400">
        {/* content */}
        <div className="">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase">
            mega sale <span className="text-rose-500">Special</span> Offer up to{" "}
            <span className="text-orange-500">60%</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quidem a minus, corporis repudiandae perferendis reprehenderit vitae
            facilis consequuntur ipsa. Molestias, ipsum eos sapiente dignissimos
            expedita nihil cupiditate commodi. Sint.
          </p>
          {/* Buttons */}
          <div className="flex items-center mt-6 space-x-4">
            <Button size={"lg"}className="bg-blue-700">Shop Now</Button>
            <Button size={"lg"}>Explore More</Button>
          </div>
          
        </div>
        {/* Image content */}
        <div className="hidden lg:block">
            <Image src="/hero.jpg" alt="pic" width={600} height={600} className="lg:w-[70%] lg:w-[70%] xl:w-[80%]"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
