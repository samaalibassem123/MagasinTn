import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { products } from "@/utils/bd";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default async function page({ params }) {
  const ID = (await params).productid;

  {
    /*GET PRODUCT FROM DATA BASE WITH ID */
  }
  const Product = products.filter((product) => product.id == ID);

  return (
    <>
      {Product.map((item, index) => (
        <div key={index} className="flex sm:flex-row flex-col min-h-svh">
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
          {/*right side */}
          <div className="p-5 sm:w-1/2 flex flex-col gap-6">
            <div>
              <strong>Description : </strong>
              <span>{item.Desc}</span>
            </div>
            <div className="text-xl">
              <strong>Prix : </strong>
              <span>{item.prix} DT</span>
            </div>

            <div className=" w-full border p-5 rounded-md">
              {/*FORMULAIRE*/}
              <form action="" className="w-full text-xl  space-y-5">
                <div>
                  <Label>Nome:</Label>
                  <Input required placeholder="votre nom" />
                </div>
                <div>
                  <Label>prenom:</Label>
                  <Input required placeholder="nom de famille" />
                </div>
                <div>
                  <Label>Numéro de Télephone:</Label>
                  <InputOTP maxLength={8}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                    </InputOTPGroup>
                    .
                    <InputOTPGroup>
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                    </InputOTPGroup>
                    .
                    <InputOTPGroup>
                      <InputOTPSlot index={5} />
                      <InputOTPSlot index={6} />
                      <InputOTPSlot index={7} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <div>
                  <Label>Adresse Mail (optionel):</Label>
                  <Input type="mail" />
                </div>
                <div>
                  <Label>Adresse Domicile:</Label>
                  <Input
                    type="mail"
                    required
                    placeholder="exemple: Tunis,ariana rue 10 2348 citer el 5athra"
                  />
                </div>

                <div className=" w-full flex justify-between items-center border">
                  <span className=" p-5 bg-black text-white cursor-pointer rounded-md">
                    +
                  </span>
                  <span>1</span>
                  <span className="p-5 bg-black cursor-pointer text-white rounded-md">
                    -
                  </span>
                </div>
                <input
                  type="submit"
                  value={"Commander"}
                  className="border p-2 w-full text-red-400 border-red-400 rounded-lg hover:bg-red-400 hover:text-white cursor-pointer transition-all "
                />
              </form>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
