"use client";
import Footer from "@/components/Navigation/Footer";
import Navigation from "@/components/Navigation/Navigation";
import cn from "clsx";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Image from "next/image";

const background = ["background1.png", "background2.png", "background3.png"];
const body = ["body1.png", "body2.png", "body3.png"];
const eyes = ["eyes1.png", "eyes2.png", "eyes3.png"];
const mouth = ["mouth1.png", "mouth2.png", "mouth3.png"];

export default function Stake() {
  const [selectedBackground, setBackground] = useState("");
  const [selectedBody, setBody] = useState("");
  const [selectedEyes, setEyes] = useState("");
  const [selectedMouth, setMouth] = useState("");
  const [isNFTminting, setNFTminting] = useState(false);

  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [bodyIndex, setBodyIndex] = useState(0);
  const [eyesIndex, setEyesIndex] = useState(0);
  const [mouthIndex, setMouthIndex] = useState(0);

  const canvasRef = useRef(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (
      selectedBackground &&
      selectedBody &&
      selectedEyes &&
      selectedMouth &&
      ctx
    ) {
      const backgroundImage = new globalThis.Image();
      backgroundImage.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        const bodyImage = new globalThis.Image();
        bodyImage.onload = () => {
          ctx.drawImage(bodyImage, 0, 0, canvas.width, canvas.height);
        };
        bodyImage.src = selectedBody;
        const eyesImage = new globalThis.Image();
        eyesImage.onload = () => {
          ctx.drawImage(eyesImage, 0, 0, canvas.width, canvas.height);
        };
        eyesImage.src = selectedEyes;
        const mouthImage = new globalThis.Image();
        mouthImage.onload = () => {
          ctx.drawImage(mouthImage, 0, 0, canvas.width, canvas.height);
        };
        mouthImage.src = selectedMouth;
      };
      backgroundImage.src = selectedBackground;
    }
  }, [selectedBackground, selectedBody, selectedEyes, selectedMouth]);

  const prevImage = (index, setIndex, array) => {
	const newIndex = index === 0 ? array.length - 1 : index - 1;
	setIndex(newIndex);
	return array[newIndex];
  };
  
  const nextImage = (index, setIndex, array) => {
	const newIndex = index === array.length - 1 ? 0 : index + 1;
	setIndex(newIndex);
	return array[newIndex];
  };
  
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center pt-24 mx-auto   rounded-lg sm:mx-[200px] sm:px-16 w-fill bg-white/10">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-center text-white">
            Cartesi Guardians
          </h1>
          <span className="p-2 py-8 font-thin text-center text-white/50">
            {" "}
            Allows you to get lower staking fees and increase the amount of
            rewards earned + VIP feature access
          </span>
        </div>
        <div className="flex flex-col-reverse gap-4 sm:flex-row-reverse">
          <div className="w-full gap-8 p-2 rounded-lg bg-white/50">
		  <div className="flex items-center w-[420px] h-[72px] flex-grow gap-32 my-4 justify-center p-1 mx-4 border-2 border-0xgo-blue ">
			<button
                className="text-3xl font-black text-transparent text-black animate-gradient bg-clip-text bg-gradient-to-br from-yellow-400 via-cyan-400 to-yellow-400"
                onClick={() =>
                  setBackground(
                    prevImage(backgroundIndex, setBackgroundIndex, background)
                  )
                }
              >
                {"<"}
              </button>
              <h3 className="w-[100px] font-black text-black text-center ">Background</h3>
              <div className="flex flex-row">
			  <button
                className="text-3xl font-black text-transparent text-black animate-gradient bg-clip-text bg-gradient-to-br from-yellow-400 via-cyan-400 to-yellow-400"
				onClick={() =>
					  setBackground(
						nextImage(backgroundIndex, setBackgroundIndex, background)
					  )
					}
				  >
					{">"}
				  </button>
              </div>
            </div>
			<div className="flex items-center w-[420px] h-[72px] flex-grow gap-32 my-4 justify-center p-1 mx-4 border-2  border-0xgo-blue  ">
              <button
                className="text-3xl font-black text-transparent text-black animate-gradient bg-clip-text bg-gradient-to-br from-yellow-400 via-cyan-400 to-yellow-400"
                onClick={() =>
                  setBody(prevImage(bodyIndex, setBodyIndex, body))
                }
              >
                {"<"}
              </button>
			  <h3 className="w-[100px] font-black text-black text-center ">Body</h3>
              <button
                className="text-3xl font-black text-transparent text-black animate-gradient bg-clip-text bg-gradient-to-br from-yellow-400 via-cyan-400 to-yellow-400"
                onClick={() =>
                  setBody(nextImage(bodyIndex, setBodyIndex, body))
                }
              >
                {">"}
              </button>
            </div>
            <div className="flex items-center w-[420px] h-[72px] flex-grow gap-32 my-4 justify-center p-1 mx-4 border-2  border-0xgo-blue  ">
              <button
                className="text-3xl font-black text-transparent text-black animate-gradient bg-clip-text bg-gradient-to-br from-yellow-400 via-cyan-400 to-yellow-400"
                onClick={() =>
                   setEyes(prevImage(eyesIndex,  setEyesIndex, eyes))
                }
              >
                {"<"}
              </button>
              <h3 className="w-[100px] font-black text-black text-center ">Eyes</h3>
              <button
                className="text-3xl font-black text-transparent text-black animate-gradient bg-clip-text bg-gradient-to-br from-yellow-400 via-cyan-400 to-yellow-400"
                onClick={() =>
                   setEyes(nextImage(eyesIndex,  setEyesIndex, eyes))
                }
              >
                {">"}
              </button>
            </div>
			<div className="flex items-center w-[420px] h-[72px] flex-grow gap-32 my-4 justify-center p-1 mx-4 border-2  border-0xgo-blue  ">
              <button
                className="text-3xl font-black text-transparent text-black animate-gradient bg-clip-text bg-gradient-to-br from-yellow-400 via-cyan-400 to-yellow-400"
                onClick={() =>
                   setMouth(prevImage(mouthIndex,  setMouthIndex, mouth))
                }
              >
                {"<"}
              </button>
              <h3 className="w-[100px] font-black text-black text-center ">Mouth</h3>
              <button
                className="text-3xl font-black text-transparent text-black animate-gradient bg-clip-text bg-gradient-to-br from-yellow-400 via-cyan-400 to-yellow-400"
                onClick={() =>
                   setMouth(nextImage(mouthIndex,  setMouthIndex, mouth))
                }
              >
                {">"}
              </button>
            </div>

            <button
              disabled={isNFTminting}
              className={cn(
                "w-full py-2 mt-2 bg-black cursor-pointer rounded-xl p1 border-1",
                selectedBackground &&
                  selectedBody &&
                  selectedEyes &&
                  selectedMouth
                  ? ""
                  : "opacity-0 pointer-events-none"
              )}
            >
              {isNFTminting ? "Minting..." : "Mint NFT"}
            </button>
          </div>
          <div
            className={`w-full p-8 rounded-lg bg-white/50 ${
              selectedBackground &&
              selectedBody &&
              selectedEyes &&
              selectedMouth &&
              "bg-white/50"
            }`}
          >
            <canvas ref={canvasRef} width={400} height={400} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
