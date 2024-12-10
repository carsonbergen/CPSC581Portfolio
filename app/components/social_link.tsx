"use client";

import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { m } from "framer-motion";
import Link from "next/link";

const SocialLink = ({ href, name }: { href: string; name: string }) => {
  return (
    <m.span
      key={name}
      className="rounded-md backdrop-blur-2xl"
      whileHover={{
        scale: 1.15,
      }}
    >
      <Link className="flex flex-row justify-start items-center" href={href}>
        <ArrowUpRight className="size-6" />
        {name}
      </Link>
    </m.span>
  );
};

export default SocialLink;
