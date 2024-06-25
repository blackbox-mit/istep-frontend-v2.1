"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
interface donateBankConnectionProps {}

export default function DonateBankConnection({}: donateBankConnectionProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="rounded-3xl bg-white w-full shadow-2xl font-palanquin p-8">
        <div
          className="flex justify-between items-center h-12"
          onClick={() => setOpen(!open)}
        >
          <p className="text-h-sm ">Donate Bankverbindung</p>
          <ChevronDownIcon aria-hidden="true" className="w-12" />
        </div>
        {open && (
          <div>
            <p>CH68 0900 0000 1617 1693 4</p>
            <p>iSTEP </p>
            <p>Weingartenstrasse 6 </p>
            <p>3417 Rüegsau</p>
          </div>
        )}
      </div>
    </>
  );
}
