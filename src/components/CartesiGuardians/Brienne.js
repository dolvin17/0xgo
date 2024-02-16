import Image from "next/image";

export default function Brienne() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4 overflow-hidden sm:flex-row rounded-xl sm:mx-48 bg-0xgo-dark">
        <ProductCards
          name="BRIENNE"
          imageURL="/nft-brienne.png"
          precios="1000"
        />
        <div className="flex flex-col items-center  h-[300px]">
          <h1 className="pb-8 text-4xl font-bold tracking-widest text-center text-yellow-400">
            {" "}
            BRIENNE DE TARTH
          </h1>
		  <div className="p-2 mb-1 overflow-y-auto bg-white/10 rounded-xl sm:mr-16">
            <p className="text-white indent-5">
              Brienne, {`"the Maiden of Tarth"`}, was born into a noble family
              in the Crownlands, (Game of Thrones). As a child, She trained in
              the arts of war, defying the gender expectations of her time. Her
              great size and strength made her a formidable warrior, although
              she was also ostracized and mocked. Brienne has faced several
              challenges: being teased and humiliated for her appearance and her
              social awkwardness. Despite her difficulties, Brienne never gave
              up her principles of honor, loyalty, and justice.
              <br /> After her praiseworthy actions, She was knighted, Brienne
              of Tarth became a symbol of hope and courage to many. She showed
              that women can be as strong and braves, challenging social norms
              and paving the way for future generations.
              <br />
              We love to quoting her:
              <br />
              <span className="ml-48 italic font-thin">
                {`"I am a warrior. I am not a lady. I am not a courtesan. I am
              a warrior"`}
              </span>
            </p>
            <p className="py-4 text-white indent-5">
              <span className="font-semibold text-0xgo-blue">
                {" "}
                Cartesi Guardians
              </span>
              , is a NFT collection composed of{" "}
              <span className="font-semibold text-yellow-400">
                {" "}
                256 limited editions.
              </span>{" "}
              These pieces are not for sale, you will only be able to own a{" "}
              <span className="font-semibold text-0xgo-blue">
                Brienne de Tarth Cartesi Guardian{" "}
              </span>
              after staking
              <span className="font-semibold text-yellow-400">
                {" "}
                1000 CTSI
              </span>{" "}
              tokens, on one of the available pools.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
function ProductCards({ name, imageURL, precios }) {
  return (
    <article className="flex flex-col ">
      <div className="relative w-full h-full ">
        <figure className="w-[500px] h-[500px] ">
          <Image className="object-cover" fill src={imageURL} alt="" />
        </figure>
      </div>
      <div className="flex flex-col items-center justify-center ml-16 lg:flex-row">
        <div className="p-x border-gray-900/10 sm:border-l-transparent ">
          <h3 className="text-xl font-bold text-center -skew-y-3 tracking-[.25em]  antialiased  text-yellow-400 uppercase">
            {name}
          </h3>
          <p className="flex flex-row gap-1 px-16 mb-8 font-thin text-white -skew-y-3 ">
            {precios}
            <Image src="/ctsi.svg" alt="0xGO" width={20} height={20} />
          </p>
        </div>
      </div>
    </article>
  );
}
