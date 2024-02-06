import Image from 'next/image';
import Link from 'next/link';
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Denny() {
	  return (
	<div className="flex flex-col items-center justify-center ">
		<Image src="/denny.jpg" alt="Denny" width={200} height={200} className="border-4 rounded-xl border-[#02F6FF] animate-wiggle animate-thrice animate-duration-1000 animate-delay-1000 animate-ease-in-out animate-alternate-reverse animate-fill-both" />
	  <h1 className="mt-8 text-3xl font-bold text-white/35 animate-wiggle animate-thrice animate-duration-1000 animate-delay-1000 animate-ease-in-out animate-alternate-reverse animate-fill-both ">Denny Portillo</h1>
	  <span className="text-xl font-thin text-cyan-200 animate-wiggle animate-thrice animate-duration-1000 animate-delay-1000 animate-ease-in-out animate-alternate-reverse animate-fill-both">Founder</span>
		<div className='flex flex-row gap-2'>
		<Link href="/" target="_blank">
		<FaSquareGithub className="mt-4 text-3xl hover:text-yellow-300 text-cyan-600 animate-wiggle animate-thrice animate-duration-1000 animate-delay-1000 animate-ease-in-out animate-alternate-reverse animate-fill-both" />
		</Link>
		<Link href="/" target="_blank">
		<FaSquareXTwitter className="mt-4 text-3xl hover:text-yellow-300 text-cyan-600 animate-wiggle animate-thrice animate-duration-1000 animate-delay-1000 animate-ease-in-out animate-alternate-reverse animate-fill-both" />
		</Link>
		<Link href="/" target="_blank">
		<FaLinkedin className="mt-4 text-3xl hover:text-yellow-300 text-cyan-600 animate-wiggle animate-thrice animate-duration-1000 animate-delay-1000 animate-ease-in-out animate-alternate-reverse animate-fill-both" />
		</Link>
		</div>
	</div>
  );
}