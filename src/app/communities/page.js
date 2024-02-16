import Link from "next/link";
import Image from "next/image";
import Projects from "../../components/Community/Projects";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Navigation/Footer";
import Objective from "../../components/Community/Objective";

export default function Communities() {
	return (
		<>
		<Navigation />
		<Objective />
		<Projects />
		<Footer />
		</>
	)
}