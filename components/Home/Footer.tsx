import React from "react";

const Footer = () => {
  return (
    <div className="pt-20 pb-12">
      {/* define grid */}
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h1 className="text-[25px] font-semibold mb-4 text-black">
            MAU Store
          </h1>
          <p className="text-sm opacity-50 text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            suscipit architecto quae. Amet fugiat necessitatibus praesentium
            excepturi consectetur aliquam aspernatur laborum fugit? Recusandae
            nisi architecto facilis accusamus ullam, possimus quasi?
          </p>
        </div>
        <div className="">
          <h1 className="text-black font-semibold opacity-80 mb-4">
            Information
          </h1>
          <div className="text-sm text-black opacity-80 space-y-2">
            <p>About</p>
            <p>Privacy Policy</p>
            <p>Return Policy</p>
            <p>Drop Shipping</p>
            <p>Shipping Policy</p>
          </div>
        </div>
        <div className="">
          <h1 className="text-black font-semibold opacity-80 mb-4">
            Account
          </h1>
          <div className="text-sm text-black opacity-80 space-y-2">
            <p>Dashboard</p>
            <p>My Orders</p>
            <p>Account Details</p>
            <p>Track Orders</p>
          </div>
        </div>
        <div>
          <h1 className="text-black font-semibold opacity-80 mb-4">
            Shop
          </h1>
          <div className="text-sm text-black opacity-80 space-y-2">
            <p>Best Seller</p>
            <p>Latest Products</p>
            <p>Sale Products</p>
            <p>Drop Shipping</p>
            <p>Reward Programme</p>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Footer;
