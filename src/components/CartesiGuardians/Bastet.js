import Image from "next/image";

export default function Bastet() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4 overflow-hidden sm:flex-row rounded-xl sm:mx-48 bg-white/50 backdrop-blur-sm">
        <ProductCards name="BASTET" imageURL="/nft-bastet.png" precios="1000" />
        <div className="flex flex-col items-center h-[300px]">
          <h1 className="pb-8 text-4xl font-bold tracking-widest text-yellow-400">
            {" "}
            BASTET
          </h1>
		  <div className="p-2 mb-1 overflow-y-auto bg-white/10 rounded-xl sm:mr-16 ">
            <p className="text-black indent-5">
              Bastet, the complex and multifaceted Egyptian goddess, worshiped
              by people of all social classes for thousands of years, was one of
              the most popular deities of ancient Egypt. Bastet was considered
              the daughter of the sun god Ra and the goddess Sekhmet. She was
              seen as a goddess of justice and revenge, and was feared for her
              power to punish evildoers. Although the ancient Egyptian religion
              is no longer practiced, Bastet remains a popular figure in modern
              culture. She is depicted in various works of art, literature and
              films, and continues to be a symbol of protection for many people.
              <br />
              Her role as protector made her one of the most beloved and
              recognized deities of ancient Egypt.
            </p>
            <p className="py-4 text-black indent-5">
              <span className="font-semibold text-pink-400">
                {" "}
                Cartesi Guardians
              </span>
              , is a NFT collection composed of{" "}
              <span className="font-semibold text-yellow-400">
                {" "}
                256 limited editions.
              </span>{" "}
              These pieces are not for sale, you will only be able to own a{" "}
              <span className="font-semibold text-pink-400">
                Bastet Cartesi Guardian{" "}
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
          <p className="flex flex-row gap-1 px-16 mb-8 font-thin text-black -skew-y-3 ">
            {precios}
            <Image src="/ctsi.svg" alt="0xGO" width={20} height={20} />
          </p>
        </div>
      </div>
    </article>
  );
}
