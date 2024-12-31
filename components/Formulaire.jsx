"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function Formulaire({ prix }) {
  const [qt, setqt] = useState(1);
  return (
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

      <div className=" w-full flex justify-between items-center border select-none">
        <span
          onClick={() => setqt(qt + 1)}
          className=" p-5 bg-black text-white cursor-pointer rounded-md hover:bg-black/50 transition-all"
        >
          +
        </span>
        <span>{qt}</span>
        <span
          onClick={() => qt > 1 && setqt(qt - 1)}
          className="p-5 bg-black cursor-pointer text-white rounded-md hover:bg-black/50 transition-all"
        >
          -
        </span>
      </div>
      <div className="text-xl">
        <strong>Prix : </strong>
        <span>{prix * qt} DT</span>
      </div>
      <input
        type="submit"
        value={"Commander"}
        className="border p-2 w-full text-red-400 border-red-400 rounded-lg hover:bg-red-400 hover:text-white cursor-pointer transition-all "
      />
    </form>
  );
}
