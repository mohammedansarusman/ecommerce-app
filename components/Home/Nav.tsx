import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBox from "../Helper/SearchBox";
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppingCartButton from "../Helper/ShoppingCartButton";
import { SignedIn, SignedOut, UserAvatar, UserButton } from "@clerk/nextjs";

const Nav = () => {
  return (
    <div className="h-[12vh] sticky top-0 z-1 bg-white shadow-md">
      <div className="w-[95%] flex justify-between items-center mx-auto h-full md:w-4/5">
        {/* Logo  */}
        <Link href="/">
          <Image alt="logo" src="/logo.png" width={50} height={50} />
        </Link>
        {/* Icons */}
        <div className="flex items-center space-x-6">
          <SearchBox />
          <HeartIcon className="cursor-pointer" />
          {/* Shopping Cart Button */}
          <ShoppingCartButton />

          {/* if signed in  */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* if not signed in */}
          <SignedOut>
            <Link href={"/sign-in"}>
              {/* User Icon */}
              <UserIcon className="cursor-pointer" />
            </Link>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Nav;
