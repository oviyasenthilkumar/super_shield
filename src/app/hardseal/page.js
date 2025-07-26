
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import HardsealHero from "../../../components/HardsealHero"
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
import HardsealApplication from '../../../components/HardsealApplication'


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

const Hardseal = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs/>
      <HardsealHero />
      <HardsealApplication />
       <TechnicalDocumentation documents={documents}/>
      <Footer/>
    </div>
  );
};

export default Hardseal;
