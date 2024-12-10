"use client";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

const FooterLink = ({ link, text }: { link: string; text: string }) => {
  return (
    <>
      <li>
        <a
          className="flex items-center transition-all hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href={link}
        >
          <ArrowUpRight className="size-6" />
          <p className="ml-2">{text}</p>
        </a>
      </li>
    </>
  );
};

export default function Footer() {
  return (
    <footer className="mb-16">
      <div className="flex flex-col">
        <div className="mt-8">
          <h1 className="font-black">made with</h1>
          <ul className="font-sm flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 text-neutral-300">
            <FooterLink
              link="https://github.com/vercel/next.js"
              text="nextjs"
            />
            {/* <FooterLink
              link="https://vercel.com/templates/next.js/portfolio-starter-kit"
              text="portfolio starter kit"
            /> */}
          </ul>
        </div>
      </div>
    </footer>
  );
}
