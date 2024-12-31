"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
{
  /*importer le base pour tester*/
}
import { products } from "@/utils/bd";
export default function Section() {
  return (
    <section className="sm:p-10 p-2">
      <div className="w-full min-h-svh border rounded-md flex flex-wrap gap-6 p-5 justify-center ">
        {/*CARDS */}
        {products.map((items, index) => (
          <div
            key={index}
            className=" shadow-md drop-shadow-sm  h-fit border sm:w-[300px] w-full rounded-md"
          >
            <div className="border-b-2">
              <Image
                className="h-[300px] rounded-md"
                src={items.Img}
                width={1920}
                height={1820}
                alt="Image de produit"
              />
            </div>
            {/*Information de produit*/}
            <div className="p-2 flex flex-col gap-2">
              <span className=" underline">{items.productName}</span>
              <span>Prix : {items.prix} DT</span>
              <span className="text-sm">livraison: {items.livraison}</span>
              <Link
                href={`/${items.id}`}
                className=" text-center font-bold text-lg p-2 rounded-sm bg-red-400 text-white hover:bg-red-400/60 transition-all"
              >
                Acheter
              </Link>
              <button className=" flex  items-center gap-2 justify-center border p-2">
                <ShoppingCart /> Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
