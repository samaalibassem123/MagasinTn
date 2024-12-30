"use client";

import * as React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Cart() {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="relative cursor-pointer">
          {/*NUMBER OF PRODUCTS*/}
          <span className=" absolute -right-2 -top-3 bg-black rounded-full px-1 text-sm text-white">
            0
          </span>
          <ShoppingCart />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Votre Panier</DrawerTitle>
            <DrawerDescription>
              le panier des Produit Selectionnez
            </DrawerDescription>
          </DrawerHeader>
          {/*product selected*/}
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
