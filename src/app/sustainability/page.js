
import Breadcrumbs from "../../../components/Breadcrumbs";
import CertificationsSection from "../../../components/CertifiedSection";
import Footer from "../../../components/Footer";
import Global2050Challenge from "../../../components/Global2050Challenge";
import Header from "../../../components/Header";
import ShieldTechnologySection from "../../../components/ShieldTechnologySection";
import SustainabilityCommitment from "../../../components/SustainabilityCommitment";
import SustainabilityHero from "../../../components/SustainabilityHero";
import SustainabilityKeyChallenge from "../../../components/SustainabilityKeyChallenge";

const Sustainability = () => {
  return (
    <div>
      <Header />
      <SustainabilityHero/>
      <Breadcrumbs />
      <SustainabilityKeyChallenge/>
      <CertificationsSection/>
      <ShieldTechnologySection/>
      <Global2050Challenge/>
      <SustainabilityCommitment/>
      <Footer />
    </div>
  );
};

export default Sustainability;