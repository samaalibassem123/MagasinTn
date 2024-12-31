import React from "react";

export default function Section() {
  return (
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
              <button className=" font-bold text-lg p-2 rounded-sm bg-red-400 text-white">
                Acheter
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
