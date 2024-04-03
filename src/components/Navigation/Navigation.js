"use client";
import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Fragment, useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { Buttoncito } from "../Buttoncito";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const LINKS = [
    <Fragment key="links">
      <div className="flex items-center justify-center gap-4">
        <div className="flex-grow">
          <Link
            href="/stake"
            className="p-2 text-2xl border-2 text-0xgo-blue bg-0xgo-dark border-cyan-600 rounded-xl"
          >
            Stake{" "}
          </Link>
        </div>
        <div className="flex-grow">
          <Link
            href="/mint"
            className="p-2 text-2xl border-2 text-0xgo-blue bg-0xgo-dark border-cyan-600 rounded-xl"
          >
            Mint NFT{" "}
          </Link>
        </div>
		<div className="flex-grow">
          <Link
            href="/communities"
            className="p-2 text-2xl border-2 text-0xgo-blue bg-0xgo-dark border-cyan-600 rounded-xl"
          >
            Communities{" "}
          </Link>
        </div>
        <Buttoncito />
      </div>
    </Fragment>,
  ];
  return (
    <section className="fixed w-full items-center flex flex-col lg:flex-row justify-center  z-[1] ">
      <div className="!z-50  w-full items-center justify-between drop-shadow-lg backdrop-blur-lg  h-[80px] bg-white/10 px-8 flex lg:max-w-full">
        <Link className="flex-shrink-0 max-w-[5rem]" href="/">
          <Image src="/logo.svg" alt="0xGO" width={50} height={50} />
        </Link>
		<div className="items-center justify-end hidden lg:flex">{LINKS}</div>
		<button 
			type="button"
			className="lg:hidden"
			onClick={() => setIsMenuOpen(!isMenuOpen)}
		>
			<TiThMenuOutline className="text-xl text-white fill-current" />
		</button>
      </div>
	  <section
        className={`flex-col p-2 bg-white  rounded-xl drop-shadow-lg bg-white/80 backdrop-blur-lg border-white  text-black gap-2 lg:hidden ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        {LINKS}
      </section>
    </section>
  );
}
