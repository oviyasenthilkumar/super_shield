
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import FlexiHero from "../../../components/FlexiHero"
import MultiguardApplication from '../../../components/MultiguardApplication'
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
import FlexiApplication from "../../../components/FlexiApplication";


const documents = [
  {
    title: "Technical Datasheet",
    type: "external",
    href: "/ProductCatalogueModal",
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
const Flexi = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <FlexiHero />
      <FlexiApplication />
      <TechnicalDocumentation documents={documents} />
      <Footer />
    </div>
  );
};

export default Flexi;
