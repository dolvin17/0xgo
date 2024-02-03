import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

export default function Caring() {
  return (
    <>
      <a className="flex-shrink-0" href="/">
        <div className="flex flex-row max-w-xl gap-8 p-6 mx-1 my-8 border-opacity-50 w-fit sm:mx-auto bg-0xgo-dark rounded-2xl shadow-black/30">
          <Image src="/caring.svg" alt="caring" width={82} height={82} />
          <div className="flex flex-col text-white">
            <span className="text-xl font-semibold">Thanks for caring</span>
            <p className="mt-2 font-thin leading-tight">
              With your deposit you are helping new and growing communities in
              the Web3 Ecosystem.
            </p>
            <div className="flex flex-row items-center gap-2 mt-3 font-semibold">Submit my Web3 community
			<FiExternalLink />
			</div>
          </div>
          <Image src="/arrow_green.svg" alt="caring" width={42} height={42} />
        </div>
      </a>
    </>
  );
}
