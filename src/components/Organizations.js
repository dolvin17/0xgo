import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { TbPointFilled } from "react-icons/tb";

export default function Organizations() {
  return (
    <>
      <div className="py-4 md:flex-row">
        <Organization
          
          imageURL="/herdaospain_logo_negro.png"
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
 <div className="flex flex-row items-center justify-center gap-2">
	   <TbPointFilled style={{color}} className="flex mx-2 size-6" />
	   {imageURL && <Image  className="object-contain w-[50px] h-[10]  mr-10 sm:mr-16" src={imageURL} alt="arrow-right" width={50} height={50} />}
	   	<span className='flex flex-grow py-2 text-black/50'>{alloc}</span>
        <span className='flex flex-grow'>{deposit}</span>
        <span className='flex flex-grow '>{earned}</span>
        <span className='flex items-center justify-center flex-grow text-yellow-500'>{donated}</span>
 </div>
  );
}