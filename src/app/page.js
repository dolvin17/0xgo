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

export default function Home() {
  return (
    <>
	  <Navigation />
	 <Stage />
	  <Footer />
    </>
  );
}
