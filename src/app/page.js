'use client';
import Staking from "@/components/Staking";
import { Chart } from "chart.js";
import Navigation from "@/components/Navigation/Navigation";
import React from "react";
import Resume from "@/components/Navigation/Resume";
import Caring from "@/components/Caring";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Navigation/Footer";
import Stage from "@/components/Stage";
import SecondState from "@/components/SecondState";
import ThirdState from "@/components/ThirdState";
import FourthState from "@/components/FourthState";

export default function Home() {
  return (
    <>
	  <Navigation />
	 <Stage />
	 <SecondState />
	 <ThirdState />
	 <FourthState />
	  <Footer />
    </>
  );
}
