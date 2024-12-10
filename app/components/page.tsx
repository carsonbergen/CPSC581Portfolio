"use client";

import { m } from "framer-motion";
import { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className="px-2 pb-64">{children}</div>
  );
}
