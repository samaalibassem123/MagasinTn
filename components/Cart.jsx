"use client";

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
import Image from "next/image";
import { useState } from "react";

export function Cart() {
  const [qt, setQt] = useState(1);

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
          {/*SELECTED PRODUCTS*/}
          <div className="flex flex-col space-y-2">
            {/*PRODUCTS CARD */}
            <div className="flex justify-between items-center w-auto border p-2 rounded-md">
              <div className="border">
                <Image
                  src={
                    "/Kitchenaid_Mixeur_plongeant_5KHBV83EER_Rouge_empire_Frontal.webp"
                  }
                  width={50}
                  height={50}
                  alt="image de produit"
                />
              </div>
              {/*INFORMATION FOR PRODUCT*/}
              <div className="flex flex-col">
                <span>Nom de produit</span>
                <span className="text-[12px] text-gray-600">
                  {12.5 * qt} DT
                </span>
              </div>
              {/*QUANTITER */}
              <div className="flex  gap-5 items-center text-center">
                <span
                  onClick={() => setQt(qt + 1)}
                  className="border p-2 text-center cursor-pointer hover:bg-black/90 rounded-md transition-all hover:text-white"
                >
                  +
                </span>
                <span className="text-center">{qt}</span>
                <span
                  onClick={() => qt > 1 && setQt(qt - 1)}
                  className="border p-2 text-center cursor-pointer hover:bg-black/90 rounded-md transition-all hover:text-white"
                >
                  -
                </span>
              </div>
              {/*DELETE PRODUCT */}
              <div className="text-sm underline text-gray-500 cursor-pointer">
                Supprimer
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Annuler</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
