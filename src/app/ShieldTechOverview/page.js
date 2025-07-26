import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import BentoCard from "../../../components/BentoCard";
import BentoCard2 from "../../../components/BentoCard2";
import BentoCard3 from "../../../components/BentoCard3";
import ShieldTechOverview from "../../../components/ShieldTechOverview";
import TechnologyTabs from "../../../components/TechnologyTabs.jsx";

const BentoCards = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <ShieldTechOverview/>
      <TechnologyTabs/>
      {/* <BentoCard  />
      <BentoCard2 />
      <BentoCard3 /> */}
      <Footer />
    </>
  );
};

export default BentoCards;
