import Breadcrumbs from "../../../../components/Breadcrumbs";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import MultisealAdvantages from "../../../../components/MultisealAdvantages";
import MultisealHero from "../../../../components/MultisealHero";
import MultisealMechanism from "../../../../components/MultisealMechanism";
import MultisealMechanismSection from "../../../../components/MultisealMechanismSection";
import MultisealTechnology from "../../../../components/MultisealTechnology";

const Multiseal = () => {
  return (
    <div>
      <Header/>
      <MultisealHero/>
      <Breadcrumbs/>
      <MultisealTechnology/>
      <MultisealAdvantages/>
      <MultisealMechanism/>
      <MultisealMechanismSection/>
      <Footer/>
    </div>
  );
};

export default Multiseal;
