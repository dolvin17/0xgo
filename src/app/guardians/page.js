import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation/Navigation";
import { BiHappyBeaming } from "react-icons/bi";
import { RiCopperCoinFill } from "react-icons/ri";
import { GiBreakingChain, GiMagnifyingGlass } from "react-icons/gi";
import Footer from "@/components/Navigation/Footer";
import Marquee from "react-fast-marquee";

export default function Cards() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center py-8 pt-24 pb-8 overflow-x-hidden text-gray-900 ">
        <h1 className="pb-8 text-6xl font-bold tracking-widest text-yellow-400">
          CARTESI GUARDIANS
        </h1>
        <p className="w-1/2 antialiased text-white indent-5">
          The Cartesi Guardians are a unique collection of 256 NFTs that
          represent a fusion between mythology, technology and exclusive
          opportunities for CTSI token stakers. These guardians, inspired by
          mythological creatures and deities such as{" "}
          <span className="text-xl font-semibold text-yellow-400">
            Hanuman, Heimdallr, Kitsune, Simurgh, Phoenix, Caladrius,
            Quetzalcoatl, Kukulkan, Poseidon and Neptune
          </span>
          , have been selected to embody the diversity and nobility within us.
          They function as token-gated badges, allowing users who participate in
          staking, to access exclusive benefits. Those who own a Cartesi
          Guardian will get special discounts, early access to VIP staking pools
          (USTD, USDC, ETH), lower unstaking fees. The amount of CTSI staked
          determines earning these guardians, providing an additional incentive
          to participate in staking and strengthen the community. <br />
          Show the world how much you care and give to the community!{" "}
        </p>
			</div>
        <div className="flex flex-row items-center justify-center gap-12 mt-4 overflow-hidden rounded-xl sm:mx-48 bg-0xgo-dark">
          <ProductCards
            name="Early M8s"
            imageURL="/nft-m8.png"
            precios="Discord Role"
          />
		  <div className="flex flex-col items-center">

		  
		  <h1 className="pb-8 text-4xl font-bold tracking-widest text-yellow-400"> Why Unicorns</h1>
          <p className="px-24 text-white indent-5">
            In mythology and culture, unicorns have been symbols of nobility and
            greatness, the concept of a unicorn as a unique and special being
            persists and, in fact, has evolved to adapt to various modern
            interpretations. Unicorns continue to be considered extraordinary
            and magical creatures, and their uniqueness has become a
            representation of rarity and exclusivity in various contexts. That
            is why the  Cartesi Early M8s  are represented behind a unicorn,
            as symbol of exclusivity and nobility, of our first 42 frens on this
            path that we undertake with great enthusiasm, but that we know will
            be hard, we need to surround ourselves with exceptional people.
			<br />
			<p className="py-4">
			 <span className="font-semibold text-0xgo-blue"> Cartesi Early M8s</span>, is a NFT collection composed of <span className="font-semibold text-yellow-400">  42 limited editions.</span> This piece,
            with no price assigned, is designed for the first 42 early members
            of 0xGO Family. To mint this NFT, join us on our <span className="font-semibold text-purple-500 underline">Discord server</span>, and
            acquire the corresponding role, Be one of the lucky owners of one of
            the limited editions of the Cartesi Early Mate.
			</p>
            Thank you for considering being part of our family.
          </p>
      </div>
	  </div>
      <Footer />
    </>
  );
}
function ProductCards({ name, imageURL, precios }) {
  return (
    <article className="flex  mx-12 flex-col w-full max-w-[16rem]  py-32  ">
      <div className="relative w-full h-full">
        <figure className="w-64 h-64 ">
          <Image
            className="object-cover w-full h-full scale-[2]"
            fill
            src={imageURL}
            alt=""
          />
        </figure>
      </div>
      <div className="flex flex-col items-center justify-center mt-32 ml-16 lg:flex-row">
        <div className="p-3 border-gray-900/10 sm:border-l-transparent ">
          <h3 className="text-xl font-bold text-center text-yellow-400 uppercase">
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
