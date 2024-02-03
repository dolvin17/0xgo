import Image from "next/image"

export default function Footer() {
	return (
		<>
		<div className="flex flex-row items-center justify-between px-6 py-4 mx-16 mb-4 border-b-2 border-0xgo-dark ">
		  <div className="flex items-center gap-4">
		  <a className="flex-shrink-0 max-w-[5rem]" href="/"> 
			<Image src="/logohor.svg" alt="0xGO" width={73} height={73} />
		  </a>
		  </div>
		  <div className="flex items-center gap-4">
			<div className="flex-grow"></div>
			<button className="flex items-center gap-4 leading-tight">
			 Cartesi Proposal
		  </button>
		  <button className="flex items-center gap-4 leading-tight">
			 About Us
		  </button>
		  <button className="flex items-center gap-4 leading-tight">
			 Docs
		  </button>
		  <button className="flex items-center gap-4 leading-tight">
			 FAQ
		  </button>
		  </div>
		</div>
		<div className="flex flex-row items-start justify-start gap-3 px-6 mx-16 mb-8 ">
		<button className="flex items-center gap-4 leading-tight text-white/40"> CharmVerse</button>
		<button className="flex items-center gap-4 leading-tight text-white/40"> Twitter</button>
		<button className="flex items-center gap-4 leading-tight text-white/40"> Telegram</button>
		<div className="flex-grow gap-4"></div>
		</div>

		</>
	)
}