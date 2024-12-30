"use client";
import React from "react";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Label } from "./ui/label";
export function SidebarMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="sm:hidden flex">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>MagazinTN à votre Service</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-center justify-center mt-5 mb-5 h-[80%] gap-20">
          <Link href={"/"} className=" relative">
            {" "}
            <span className=" before:-z-20 before:block before:absolute  before:w-full before:h-full before:bottom-0 before:bg-red-400 text-white p-2 before:skew-x-3 text-2xl">
              Shop
            </span>
          </Link>
          <Link href={"/"} className=" relative">
            <span className=" before:-z-20 before:block before:absolute before:w-full   before:h-full before:bottom-0 before:bg-red-400 text-white p-2 before:skew-x-3 text-2xl">
              Contact
            </span>
          </Link>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Label className="text-gray-400">
              Merci pour choisir Notre Service 💗
            </Label>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
