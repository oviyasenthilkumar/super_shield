import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
import InjectProducts from "../../../components/InjectProducts";
import InjectHero from "../../../components/InjectHero";
import InjectApplication from "../../../components/InjectApplication";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_Inject6870.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "external",
    href: "/ProductCatalogueModal",
  },
  {
    title: "Declaration of Performance",
    type: "external",
    href: "/ProductCatalogueModal",
  },
  {
    title: "Specifications",
    type: "external",
    href: "/ProductCatalogueModal",
  },
  {
    title: "Approvals and Certificates",
    type: "external",
    href: "/ProductCatalogueModal",
  },
];
const details = 
  {
    img: "/inject6870.webp",
    title: "INJECT 6870",
    subtitile: "Hydro Expansive Polyurethane Injection Resin",
    para: "SUPERSHIELD INJECT 6870 is a polyurethane resin based on MDI (Methylene Diphenyl Diisocyanate). It features a low viscosity and expands upon contact with water into a flexible foam that does not shrink. SUPERSHIELD Inject 6870 penetrates deeply into joints and cracks, reacting with water to form a flexible, closed-cell foam that accommodates micro-movements. It expands by 800% and is resistant to water, weak acids, alkalis, and microorganisms. The resin adheres well to concrete, cement, bricks, mortars, metals, and some plastics. Reaction speed is controlled by 6-10% catalyst, ensuring good cell formation.",
    Application:"SUPERSHIELD INJECT 6870 is ideal for sealing and ensuring water tightness in cracks, joints on walls and floors, concrete constructions, and sewer systems.",
  }

const Inject6870 = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <InjectHero details={details} />
      <InjectApplication details={details}/>
      <TechnicalDocumentation documents={documents} />
      <InjectProducts />
      <Footer />
    </>
  );
};

export default Inject6870;
