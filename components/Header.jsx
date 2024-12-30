import Link from "next/link";
import React from "react";
import { SidebarMenu } from "./SidebarMenu";
import { Cart } from "./Cart";

export default function Header() {
  return (
    <div className=" select-none     flex items-center justify-between p-6 drop-shadow-sm shadow-md backdrop-blur-md">
      {/*MENU FOR SMALL DEVICES */}
      <SidebarMenu />
      {/*MENU FOR BIG DEVICES */}
      <div className="sm:flex hidden gap-20 items-center text-center">
        <Link href={"/"} className=" relative">
          {" "}
          <span className="p-1 before:-z-20 before:block before:absolute  before:w-1 before:h-full before:bottom-0 before:bg-red-400 hover:before:w-full before:transition-all before:ease-in-out before:duration-500 hover:text-white hover:delay-400 transition-all">
            Shop
          </span>
        </Link>
        <Link href={"/"} className=" relative">
          <span className="p-1 before:-z-20 before:block before:absolute before:w-1  before:h-full before:bottom-0 before:bg-red-400 hover:before:w-full before:transition-all before:ease-in-out before:duration-500 hover:text-white hover:delay-400 transition-all">
            Contact
          </span>
        </Link>
      </div>

      {/*BRAND NAME*/}
      <h1 className="text-2xl font-extrabold before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-400 relative inline-block">
        <span className="relative text-white">MagasinTn</span>
      </h1>

      {/*CART*/}
      <Cart />
    </div>
  );
}
