"use client";

import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const SocialLink = ({ href, name }: { href: string; name: string }) => {
  return (
    <span
      key={name}
      className="rounded-md backdrop-blur-2xl"
    >
      <Link className="flex flex-row justify-start items-center" href={href}>
        <ArrowUpRight className="size-6" />
        {name}
      </Link>
    </span>
  );
};

export default SocialLink;
