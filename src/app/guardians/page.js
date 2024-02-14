import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Navigation/Footer";
import Definition from "../../components/CartesiGuardians/Definition";
import EarlyMates from "../../components/CartesiGuardians/EarlyMates";
import Kitsune from "../../components/CartesiGuardians/Kitsune";
import Hanuman from "../../components/CartesiGuardians/Hanuman";
import Heimdallr from "../../components/CartesiGuardians/Heimdallr";
import Bastet from "../../components/CartesiGuardians/Bastet";
import Brienne from "../../components/CartesiGuardians/Brienne";

export default function Cards() {
  return (
    <>
      <Navigation />
     <Definition />
	 <EarlyMates />
	 <Kitsune />
	 <Hanuman />
	 <Heimdallr />
	 <Bastet />
	 <Brienne />
      <Footer />
    </>
  );
}
