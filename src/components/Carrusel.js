import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation/Navigation";
import { BiHappyBeaming } from "react-icons/bi";
import { RiCopperCoinFill } from "react-icons/ri";
import { GiBreakingChain, GiMagnifyingGlass } from "react-icons/gi";
import Footer from "@/components/Navigation/Footer";
import Marquee from "react-fast-marquee";

export default function Carrusel() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-8 overflow-x-hidden text-gray-900 ">
        <h1 className="text-3xl antialiased font-black text-yellow-400 tracking-[.25em] ">
		EARN YOU BADGE
        </h1>
		<Link href="/guardians" className="pb-4 italic underline hover:text-cyan-400 text-0xgo-blue/50 ">
		Learn more
		</Link>
        <div className="z-0 flex flex-row flex-wrap items-center justify-center w-full overflow-hidden text-gray-600 bg-white8">
          <Marquee className="overflow-hidden" pauseOnHover gradient={false} speed={50}>
            <ProductCards
              name="M8"
              imageURL="/nft-m8.png"
              precios="Discord Role"
            />
            <ProductCards
              name="Kitsune"
              imageURL="/nft-kitsune.png"
              precios="50 CTSI"
            />
            <ProductCards
              name="Hánuman"
              imageURL="/nft-hanuman.png"
              precios="250 CTSI"
            />

            <ProductCards
              name="HeimdallR"
              imageURL="/nft-keimdall.png"
              precios="500 CTSI"
            />
            <ProductCards
              name="Bastet"
              imageURL="/nft-bastet.png"
              precios="800 CTSI"
            />

            <ProductCards
              name="Brienne"
              imageURL="/nft-brienne.png"
              precios="800 CTSI"
            />
            <ProductCards
              name="SIMURGH"
              imageURL="/nft-simurgh.png"
              precios="1000 CTSI"
            />
            <ProductCards
              name="CALADRIUS"
              imageURL="/nft-caladrius.png"
              precios="1000 CTSI"
            />
            <ProductCards
              name="PHOENIX"
              imageURL="/nft-phoenix.png"
              precios="1000 CTSI"
            />
            <ProductCards
              name="POSEIDON"
              imageURL="/nft-poseidon.png"
              precios="1600 CTSI"
            />
            <ProductCards
              name="NEPTUNO"
              imageURL="/nft-neptuno.png"
              precios="1600 CTSI"
            />
            <ProductCards
              name="KUKULKAN"
              imageURL="/nft-kukulkan.png"
              precios="+ 2000 CTSI"
            />
            <ProductCards
              name="QUETZALCOATL"
              imageURL="/nft-quetz.png"
              precios="+ 2000 CTSI"
            />
          </Marquee>
        </div>
      </div>
    </>
  );
}
function ProductCards({ name, imageURL, precios }) {
  return (
    <article className="flex  mx-12 flex-col w-full max-w-[16rem]  transition-transform animate-wiggle animate-infinite animate-duration-[6000ms] animate-delay-700 pt-32 shadow-2xl border-2 rounded-2xl  border-black ">
      <div className="relative w-full h-[16rem] bg-white ">
        <figure className="w-64 h-64 transition bg-black border-2 border-black rounded-b-none ">
          <Image
            className="object-cover w-full h-full scale-[2]"
            fill
            src={imageURL}
            alt=""
          />
        </figure>
      </div>
      <div className="flex flex-col items-center justify-center mt-24 ml-16 lg:flex-row">
        <div className="p-3 border-gray-900/10 sm:border-l-transparent ">
          <h3 className="text-xl font-bold tracking-[.25em] antialiased text-center text-yellow-400 uppercase">
            {name}
          </h3>
          <p className="flex flex-row gap-1 px-4 font-thin text-white ">
            {precios}
            <Image src="/ctsi.svg" alt="0xGO" width={14} height={14} />
          </p>
        </div>
      </div>
    </article>
  );
}
