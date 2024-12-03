"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
interface donateBankConnectionProps {}

export default function DonateBankConnection({}: donateBankConnectionProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Donate.donateBank");
  return (
    <>
      <div className="rounded-3xl bg-white w-full shadow-2xl font-palanquin p-8 cursor-pointer">
        <div
          className="flex justify-between items-center h-12"
          onClick={() => setOpen(!open)}
        >
          <p className="text-h-sm ">{t("title")}</p>
          <ChevronDownIcon aria-hidden="true" className="w-12" />
        </div>
        {open && (
          <div className="pt-4">
            <p>CH68 0900 0000 1617 1693 4</p>
            <p>iSTEP </p>
            <p>Parkettstrasse 36</p>
            <p>3432 Lützelflüh</p>
          </div>
        )}
      </div>
    </>
  );
}
