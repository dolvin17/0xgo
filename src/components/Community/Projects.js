import Image from "next/image";
import Link from "next/link";
import { CiSquarePlus } from "react-icons/ci";
import { GiWorld } from "react-icons/gi";
import { FaLocationArrow } from "react-icons/fa";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col sm:mx-48 bg-0xgo-dark rounded-xl sm:my-24">
        <div className="flex flex-col items-center justify-center flex-grow gap-8 mt-8 sm:flex-row sm:px-48">
          <h1 className="flex-grow my-8 text-2xl text-yellow-400">
            {" "}
            Approved Communities (3)
          </h1>
          <Link
            href="/"
            className="flex flex-row items-center justify-center gap-2 p-2 text-center border-2 hover:bg-black text-0xgo-blue bg-0xgo-dark border-cyan-600 rounded-xl"
          >
            <CiSquarePlus size={30} className="text-0xgo-blue" />
            Add new community{" "}
          </Link>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center sm:flex-row ">
          <CommunitiesCard
            name="testing DAO"
            description="This is a community of artists, developers, and creators building a decentralized world"
            imageURL="/community.png"
            link="https://0xgo.fund"
            maskURL="Website"
            location="Argentina"
          />
          <CommunitiesCard
            name="testing DAO"
            description="This is a diverse developer and builder pipeline focused on women in the web3 space "
            imageURL="/community.png"
            link="https://0xgo.fund"
            maskURL="Website"
            location="Nigeria"
          />
          <CommunitiesCard
            name="testing DAO"
            description="This is is the home of a global tribe of regenerative thinkers, tinkers, and doers."
            imageURL="/community.png"
            link="https://0xgo.fund"
            maskURL="Website"
            location="Colombia"
          />
        </div>
      </div>
    </>
  );
}

function CommunitiesCard({
  name,
  description,
  imageURL,
  link,
  location,
  maskURL,
}) {
  return (
    <article className="flex flex-col w-full max-w-[16rem] hover:scale-110 delay-75 transition-transform m-8  bg-gradient-to-br bg-300 animate-gradient   from-yellow-200 to-cyan-200 border rounded-2xl overflow-hidden border-white">
      <div className="relative w-full h-[12rem] ">
        <Image
          className="object-cover w-full h-full rounded-b-none"
          fill
          src={imageURL}
          alt=""
        />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="p-3 border-gray-900/10 sm:border-l-transparent">
          <h3 className="px-2 text-xl font-bold text-black uppercase ">
            {name}
          </h3>
          <div className="flex items-center gap-2 px-2 mt-4 text-black ">
            {" "}
            <FaLocationArrow size={15} /> {location}
          </div>
          <div>
            <Link
              href={link}
              className="flex items-center gap-2 px-2 text-black "
            >
              {" "}
              <GiWorld size={15} /> {maskURL}
            </Link>
          </div>

          <div className="flex flex-row items-center justify-center gap-3 p-3 text-0xgo-dark">
            {description}
          </div>
        </div>
      </div>
    </article>
  );
}
