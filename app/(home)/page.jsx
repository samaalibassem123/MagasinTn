"use client";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
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
  ]);
  return (
    <div>
      <Header />
      <section className="sm:p-10 p-2">
        <div className="w-full min-h-svh border rounded-md flex flex-wrap gap-6 p-5 ">
          {/*card */}
          {products.map((items, index) => (
            <div
              key={index}
              className="h-fit border sm:w-[300px] w-full rounded-md"
            >
              <div className="border-b-2">
                <Image
                  className="h-[300px] rounded-md"
                  src={items.Img}
                  width={1090}
                  height={1220}
                  alt="Image de produit"
                />
              </div>
              {/*Information de produit*/}
              <div className="p-2 flex flex-col gap-2">
                <span className=" underline">{items.productName}</span>
                <span>Prix : {items.prix} DT</span>
                <span className="text-sm">livraison: {items.livraison}</span>
                <button className=" font-bold text-lg p-2 rounded-sm bg-red-400">
                  Acheter
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
