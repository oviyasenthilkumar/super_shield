
import Breadcrumbs from "../../../components/Breadcrumbs";
import CollaborationSection from "../../../components/CollabrationSection";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Mission from "../../../components/Mission";
import ResearchMarket from "../../../components/ResearchMarket";
import ShieldAdaptiveTech from "../../../components/ShieldAdaptiveTech";
import ShieldHero from "../../../components/ShieldHero";

const Shieldconsortium = () => {
  return (
    <div>
      <Header />
      <ShieldHero />
      <Breadcrumbs />
      <ShieldAdaptiveTech/>
      <ResearchMarket/>
      <Mission/>
      <CollaborationSection/>
      <Footer />
    </div>
  );
};

export default Shieldconsortium;