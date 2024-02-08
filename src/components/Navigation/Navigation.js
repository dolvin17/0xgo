import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navigation() {
  return (
    <div className="fixed top-0 flex flex-row items-center bg-opacity-50 justify-between w-full px-6 bg-0xgo-dark h-[60px] ">
      <div className="flex items-center gap-4">
        <a className="flex-shrink-0 max-w-[5rem]" href="/">
          <Image src="/logo.svg" alt="0xGO" width={42} height={42} />
        </a>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-grow">
          <Link href="/guardians" className="p-2 border-2 text-0xgo-blue bg-0xgo-dark border-cyan-600 rounded-xl">
            Cartesi Guardians{" "}
          </Link>
        </div>
        <ConnectButton />
      </div>
    </div>
  );
}
