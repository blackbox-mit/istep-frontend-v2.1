"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { PortableText } from "@portabletext/react";

export default function DonateBankConnection({ titleBank, textBankRaw }: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="rounded-3xl bg-white w-full shadow-2xl font-palanquin p-8 cursor-pointer">
        <div
          className="flex justify-between items-center h-12"
          onClick={() => setOpen(!open)}
        >
          <p className="text-h-sm ">{titleBank}</p>
          <ChevronDownIcon aria-hidden="true" className="w-12" />
        </div>
        {open && (
          <div className="pt-4">
            <PortableText
              value={textBankRaw}
              components={{
                list: ({ children, value }) => {
                  if (value.listItem === "bullet") {
                    return <ul className="list-disc pl-5">{children}</ul>;
                  }
                  if (value.listItem === "number") {
                    return <ol className="list-decimal pl-5">{children}</ol>;
                  }
                  return <ul className="pl-5">{children}</ul>;
                },
                listItem: ({ children }) => (
                  <li className="mb-1">{children}</li>
                ),
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
