"use client";
import { ReactNode, useState } from "react";
import { m } from "framer-motion";

export default function Card({
  children,
  title,
  icon,
  className,
}: {
  children: ReactNode;
  title: string;
  icon?: ReactNode;
  className?: string;
}) {
  const [focused, setFocused] = useState<boolean>(false);

  const cardVariants = {
    active: {
      scale: 1.05,
      zIndex: 100,
      maxHeight: "fit-content",
    },
    inactive: {
      scale: 1,
    },
  };

  return (
    <div className={`flex flex-wrap relative py-2 md:p-2 w-full z-0 overflow-visible ${className}`}>
      <m.div
        className="
          relative top-0 left-0 w-full h-full
          rounded-lg p-2
          backdrop-blur-md
          border border-[#ffffff14]
        "
        initial={{
          zIndex: 0,
        }}
        whileHover={{
          zIndex: 9999,
          scale: 1.1,
        }}
      >
        <div
          className="rounded-md backdrop-blur-2xl flex flex-row justify-start items-center mb-1"
        >
          {icon != undefined ? (
            <div className="w-10 h-10 pr-2">{icon}</div>
          ) : null}
          <h1 className="font-black text-xl">{title}</h1>
        </div>
        <div
          className="whitespace-pre-line text-wrap"
          style={{
            maxHeight: "fit-content",
          }}
        >
          {children}
        </div>
      </m.div>
    </div>
  );
}
