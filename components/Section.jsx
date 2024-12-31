"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
export default function Section() {
  const [products, setProducts] = useState([
    {
      productName: "Watch",
      Img: "/montre-intelligente-isolé.webp",
      prix: 15,
      livraison: "Tunis, sfax, Sousse",
    },
    {
      productName: "Mixeur",
      Img: "/Kitchenaid_Mixeur_plongeant_5KHBV83EER_Rouge_empire_Frontal.webp",
      prix: 20,
      livraison: "Tunis, Ariana,Sousse",
    },
    {
      productName: "Dumbles",
      Img: "/d.webp",
      prix: 15,
      livraison: "Tunis, sfax, Sousse",
    },
    {
      productName: "Cassarouna",
      Img: "/dutch-oven.webp",
      prix: 50,
      livraison: "Tunis, sfax, Sousse",
    },
    {
      productName: "Watch",
      Img: "/montre-intelligente-isolé.webp",
      prix: 70,
      livraison: "Tunis, sfax, Sousse",
    },
    {
      productName: "Watch",
      Img: "/montre-intelligente-isolé.webp",
      prix: 80,
      livraison: "Tunis, sfax, Sousse",
    },
  ]);

  return (
    <section className="sm:p-10 p-2">
      <div className="w-full min-h-svh border rounded-md flex flex-wrap gap-6 p-5 justify-center ">
        {/*card */}
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
              <button className=" font-bold text-lg p-2 rounded-sm bg-red-400 text-white hover:bg-red-400/60 transition-all">
                Acheter
              </button>
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
