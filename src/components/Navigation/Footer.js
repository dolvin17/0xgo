import Image from "next/image"
import Link from "next/link"

export default function Footer() {
	return (
		<>
		<div className="flex flex-row items-center justify-between px-6 py-4 mx-12 mb-4 border-b-2 sm:flex-wrap border-0xgo-dark ">
		  <div className="flex items-center gap-4 sm:flex-col">
		  <a className="flex-shrink-0 " href="/"> 
			<Image className="max-w-[120px] px-2" src="/logohor.svg" alt="0xGO" width={73} height={73} />
		  </a>
		  </div>
		  <div className="flex items-center gap-4">
			<button className="flex items-center gap-4 text-xs leading-tight">
			 Cartesi Proposal
		  </button>
		  <button className="flex items-center gap-4 text-xs leading-tight">
			 About Us
		  </button>
		  <button className="flex items-center gap-4 text-xs leading-tight">
			 Docs
		  </button>
		  <button className="flex items-center gap-4 text-xs leading-tight">
			 FAQ
		  </button>
		  </div>
		</div>
		<div className="flex flex-row items-center justify-center gap-3 mx-16 mb-8">
		<button className="flex items-center gap-4 text-xs leading-tight text-white/40"> CharmVerse</button>
		<Link href="https://twitter.com/0xgo_fund" target="_blank" className="flex items-center gap-4 text-xs leading-tight text-white/40"> Twitter</Link>
		<button className="flex items-center gap-4 text-xs leading-tight text-white/40"> Telegram</button>
		</div>

		</>
	)
}