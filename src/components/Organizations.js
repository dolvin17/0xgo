import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { TbPointFilled } from "react-icons/tb";

export default function Organizations() {
  return (
    <>
      <div className="gap-6 py-4  md:flex-row">
        <Organization
          
          imageURL="/herdaospain.svg"
          alloc="65%"
		  deposit="0.3ETH"
		  earned="$545"
		  donated="$723"
		  color="#00E834"
        />

        <Organization
		 imageURL="/sochi.svg"
          alloc="23%"
		  deposit="0.3ETH"
		  earned="$320"
		  donated="$454"
		  color="#FF02F5"
        />

        
        <Organization
		imageURL="/ashe.svg"
          alloc="12%"
		  deposit="0.2ETH"
		  earned="$123"
		  donated="$73"
		  color="#FFF200"
        />
      </div>
    </>
  );
}

function Organization({imageURL, alloc, deposit, earned, donated, color }) {
  return (
 <div className="flex flex-row items-center justify-center">
	   <TbPointFilled style={{color}} className="flex mx-2 size-6" />
	   {imageURL && <Image  className="object-contain w-[50px] h-[10]" src={imageURL} alt="arrow-right" width={50} height={50} />}
	   	<span className='flex justify-center flex-grow py-2 ml-8 text-white/50'>{alloc}</span>
        <span className='flex justify-center flex-grow '>{deposit}</span>
        <span className='flex justify-center flex-grow'>{earned}</span>
        <span className='flex justify-center flex-grow text-0xgo-blue'>{donated}</span>
 </div>
  );
}