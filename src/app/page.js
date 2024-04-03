"use client";
import { Chart } from "chart.js";
import React from "react";
import Resume from "@/components/Navigation/Resume";
import Navigation from "@/components/Navigation/Navigation";
import Caring from "@/components/Caring";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Navigation/Footer";
import Stage from "@/components/Stage";
import SecondState from "@/components/SecondState";
import ThirdState from "@/components/ThirdState";
import FourthState from "@/components/FourthState";
import Carrusel from "../components/Carrusel";
import Howitworks from "../components/How/Howitworks";
import Process from "../components/How/Process";

export default function Home() {
  return (
    <>
      <Navigation />
      <Stage />
      <Carrusel />
      <Howitworks />
     <Process />
	  {/*<SecondState />
	 <ThirdState />
	 <FourthState />*/}
      <Footer />
    </>
  );
}
