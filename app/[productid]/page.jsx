import { products } from "@/utils/bd";
import Image from "next/image";
export default async function page({ params }) {
  const ID = (await params).productid;

  {
    /*GET PRODUCT FROM DATA BASE WITH ID */
  }
  const Product = await products.filter((product) => product.id == ID);

  return (
    <>
      {Product.map((item, index) => (
        <div key={index} className="flex sm:flex-col flex-row min-h-svh">
          {/*left side */}
          <div className=" sm:min-h-svh h-[80%]  sm:w-1/2 w-full flex  items-center justify-center border">
            <Image
              src={item.Img}
              width={2090}
              height={3000}
              className=" sm:size-1/2 size-full object-cover h-full"
              alt="img de produit"
            />
          </div>
        </div>
      ))}
    </>
  );
}
