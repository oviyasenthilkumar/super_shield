
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import BondplastHero from "../../../components/BondplaseHero"
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
import BondplastApplication from '../../../components/BondplastApplication'


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

const Bondplast = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs/>
      <BondplastHero />
      <BondplastApplication />
      <TechnicalDocumentation documents={documents}/>
      <Footer/>
    </div>
  );
};

export default Bondplast;
