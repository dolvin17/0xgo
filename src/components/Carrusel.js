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
        <h1 className="text-5xl text-center antialiased font-black text-yellow-400 tracking-[.25em] animate-fade-down animate-once animate-duration-700 animate-delay-300   ">
		EARN YOU BADGE
        </h1>
		<Link href="/guardians" className="py-4 italic underline hover:text-orange-400 text-0xgo-blue/100 ">
		Learn more
		</Link>
        <div className="z-0 flex flex-row flex-wrap items-center justify-center w-full mt-8 overflow-hidden text-gray-600">
          <Marquee className="overflow-hidden" pauseOnHover gradient={false} speed={80}>
            <ProductCards
              name="EARLY MATE"
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
              name="CALADRIUS"
              imageURL="/nft-caladrius.png"
              precios="800 CTSI"
            />
			   <ProductCards
              name="MORGANA"
              imageURL="/nft-simurgh.png"
              precios="800 CTSI"
            />
            <ProductCards
              name="PHOENIX"
              imageURL="/nft-phoenix.png"
              precios="800 CTSI"
            />
			   <ProductCards
              name="Bastet"
              imageURL="/nft-bastet.png"
              precios="1000 CTSI"
            />

            <ProductCards
              name="Brienne"
              imageURL="/nft-brienne.png"
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
    <article className="flex flex-col  -mx-[75px] transition-transform animate-wiggle animate-infinite animate-duration-[6000ms] animate-delay-700    ">
       <div className="relative w-full h-full ">
			<figure className="w-[500px] h-[500px] ">
			  <Image
				className="object-cover"
				fill
				src={imageURL}
				alt=""
			  />
			</figure>
		  </div>
		  <div className="flex flex-col items-center justify-center ml-8 lg:flex-row">
			<div className="p-x border-gray-900/10 sm:border-l-transparent ">
			  <h3 className="text-xl font-bold text-center tracking-[.25em]  antialiased  text-yellow-400 uppercase">
				{name}
			  </h3>
			  <p className="flex flex-row gap-1 px-16 mb-8 font-thin text-white ">
				{precios}
				<Image src="/ctsi.svg" alt="0xGO" width={14} height={14} />
			  </p>
			</div>
		  </div>
    </article>
  );
}
