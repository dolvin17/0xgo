import Image from "next/image";
export default function Navigation() {
  return (
	<div className="flex flex-row items-center justify-between w-full px-6 py-4 mb-24 bg-0xgo-dark">
	  <div className="flex items-center gap-4">
	  <a className="flex-shrink-0 max-w-[5rem]" href="/"> 
		<Image src="/logo.svg" alt="0xGO" width={42} height={42} />
	  </a>
	  </div>
	  <div className="flex items-center gap-4">
		<div className="flex-grow"></div>
		<w3m-button />
	  </div>
	</div>
  );
}