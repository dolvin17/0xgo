"use client";
import Footer from "@/components/Navigation/Footer";
import Navigation from "@/components/Navigation/Navigation";
import cn from "clsx";
import { useEffect, useState } from "react";
import { useRef } from "react";

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
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center py-16 mx-8 mt-32 rounded-lg sm:px-16 w-fill bg-white/10">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-center text-white">
            Cartesi Guardians
          </h1>
          <span className="py-8 mx-1 font-thin text-white/50">
            {" "}
            Allows you to get lower staking fees and increase the amount of
            rewards earned + VIP feature access
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="w-full gap-8 p-2 rounded-lg bg-white/50">
            <div className="flex flex-col p-1 mx-4 ">
              <h3 className="w-[100px] font-thin">Background</h3>
              <div className="flex flex-row">
                {background.map((bg) => (
                  <img
                    src={bg}
                    key={bg}
                    onClick={() => setBackground(bg)}
                    className={`w-20 h-20 cursor-pointer rounded-lg ${
                      bg === selectedBackground ? "border-2 border-white" : ""
                    } mr-4`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col p-1 mx-4">
              <h3 className="w-[100px] font-thin">Body</h3>
              <div className="flex flex-row">
                {body.map((bd) => (
                  <img
                    src={bd}
                    key={bd}
                    onClick={() => setBody(bd)}
                    className={`w-20 h-20 cursor-pointer rounded-lg ${
                      bd === selectedBody ? "border-2 border-white" : ""
                    } mr-4`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col p-1 mx-4">
              <h3 className="w-[100px] font-thin">Eyes</h3>
              <div className="flex flex-row">
                {eyes.map((eye) => (
                  <img
                    src={eye}
                    key={eye}
                    onClick={() => setEyes(eye)}
                    className={`w-20 h-20 cursor-pointer rounded-lg ${
                      eye === selectedEyes ? "border-2 border-white" : ""
                    } mr-4`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col p-1 mx-4">
              <h3 className="w-[100px] font-thin">Mouth</h3>
              <div className="flex flex-row">
                {mouth.map((mt) => (
                  <img
                    src={mt}
                    key={mt}
                    onClick={() => setMouth(mt)}
                    className={`w-20 h-20 cursor-pointer rounded-lg ${
                      mt === selectedMouth ? "border-2 border-white" : ""
                    } mr-4`}
                  />
                ))}
              </div>
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
            className={`w-full p-8 rounded-lg ${
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
