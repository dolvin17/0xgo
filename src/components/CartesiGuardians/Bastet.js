import Image from "next/image";

export default function Bastet() {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-12 mt-4 overflow-hidden rounded-xl sm:mx-48 bg-0xgo-dark">
        <ProductCards name="BASTET" imageURL="/nft-bastet.png" precios="800" />
        <div className="flex flex-col items-center">
          <h1 className="pb-8 text-4xl font-bold tracking-widest text-yellow-400">
            {" "}
            BASTET
          </h1>
          <p className="px-24 text-white indent-5">
            Bastet, a complex and multifaceted Egyptian goddess, worshiped for
            thousands of years, was one of the most popular deities of ancient
            Egypt, worshiped by people of all social classes. In Egyptian
            mythology, Bastet was considered the daughter of the sun god Ra and
            the goddess Sekhmet. She was seen as a goddess of justice and
            revenge, and was feared for her power to punish evildoers. Although
            the ancient Egyptian religion is no longer practiced, Bastet remains
            a popular figure in modern culture. She is depicted in various works
            of art, literature and films, and continues to be a symbol of
            protection for many people. 
			<br />Her role as protector made her one of
            the most beloved and revered deities of ancient Egypt.
            <p className="py-4">
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
                Bastet Cartesi Guardian{" "}
              </span>
              after staking
              <span className="font-semibold text-yellow-400">
                {" "}
                800 CTSI
              </span>{" "}
              tokens, on one of the available pools.
            </p>
          </p>
        </div>
      </div>
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
          <h3 className="text-xl font-bold text-center tracking-[.25em] antialiased text-yellow-400 uppercase">
            {name}
          </h3>
          <p className="flex flex-row gap-1 px-16 font-thin text-white ">
            {precios}
            <Image src="/ctsi.svg" alt="0xGO" width={14} height={14} />
          </p>
        </div>
      </div>
    </article>
  );
}