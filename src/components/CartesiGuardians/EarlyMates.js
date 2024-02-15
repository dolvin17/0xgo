import Image from "next/image";
import Link from "next/link";

export default function EarlyMates() {
	return (
		<>
		
      <div className="flex flex-col items-center justify-center mt-4 overflow-hidden sm:flex-row rounded-xl sm:mx-48 bg-0xgo-dark">
        <ProductCards
          name="Early MATE"
          imageURL="/nft-m8.png"
          precios="Discord Role"
        />
        <div className="flex flex-col items-center h-[400px]">
          <h1 className="pb-8 text-4xl font-bold tracking-widest text-center text-yellow-400">
            {" "}
            WELCOME, <span className="text-0xgo-blue"> EARLY MATE</span> 
          </h1>
		  <div  className="p-2 overflow-y-auto sm:pr-16 ">

          <p className="text-white indent-5">
            In mythology and culture, unicorns have been symbols of nobility and
            greatness, the concept of a unicorn as a unique and special being
            persists and, in fact, has evolved to adapt to various modern
            interpretations. Unicorns continue to be considered extraordinary
            and magical creatures, and their uniqueness has become a
            representation of rarity and exclusivity in various contexts. That
            is why the Cartesi Early M8s are represented behind a unicorn, as
            symbol of exclusivity and nobility, of our first 42 frens on this
            path that we undertake with great enthusiasm, but that we know will
            be hard, we need to surround ourselves with exceptional people.
            <br />
            </p>
            <p className="py-4 text-white indent-5">
              <span className="font-semibold text-0xgo-blue">
                {" "}
                Cartesi Early M8s
              </span>
              , is a NFT collection composed of{" "}
              <span className="font-semibold text-yellow-400">
                {" "}
                42 limited editions.
              </span>{" "}
              This piece, with no price assigned, is designed for the first 42
              early members of 0xGO Family. To mint this NFT, join us on our{" "}
              <Link href="https://discord.gg/Gu2CzpmXjd" className="font-semibold text-purple-500 underline ">
                Discord server
              </Link>
              , and acquire the corresponding role, Be one of the lucky owners
              of one of the limited editions of the Cartesi Early Mate.
			  <br />
			  <br />
            Thank you for considering being part of our family.
          </p>
		  </div>
        </div>
      </div>
		</>
	)
}
function ProductCards({ name, imageURL, precios }) {
	return (
	  <article className="flex flex-col ">
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
		<div className="flex flex-col items-center justify-center ml-16 lg:flex-row">
		  <div className="p-x border-gray-900/10 sm:border-l-transparent ">
			<h3 className="text-xl font-bold text-center -skew-y-3 tracking-[.25em]  antialiased  text-yellow-400 uppercase">
			  {name}
			</h3>
			<p className="flex flex-row gap-1 px-16 mb-8 font-thin text-white -skew-y-3 ">
			  {precios}
			  <Image src="/ctsi.svg" alt="0xGO" width={14} height={14} />
			</p>
		  </div>
		</div>
	  </article>
	);
  }
  