'use client';
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

export default function Home() {
  return (
    <>
	  <Navigation />
	 <Stage />
	 <Carrusel />
	 <SecondState />
	 <ThirdState />
	 <FourthState />
	  <Footer />
    </>
  );
}
