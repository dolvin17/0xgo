import Node from "./Node";
import Zero from "./Zero";
import Nft from "./Nft";

export default function Howitworks() {
  return (
    <>
      <div className="max-w-screen-xl pt-16 mx-auto mt-16 rounded-lg px-auto ">
        <h1 className="text-2xl font-bold text-center text-black text-apple-system md:text-3xl">
          Core Features && Staking Process
        </h1>
        <div className="flex flex-col items-start justify-center sm:px-24 md:gap-8 md:flex-row md:justify-center ">
          <div className="max-w-sm mx-auto mb-6 md:mb-0">
            <Node />
          </div>
          <div className="max-w-sm mx-auto mb-6 md:mb-0">
            <Zero />
          </div>
          <div className="max-w-sm mx-auto mb-6 md:mb-0">
            <Nft />
          </div>
        </div>
      </div>
    </>
  );
}
