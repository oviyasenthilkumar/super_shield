import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import SealonHero from "../../../components/SealonHero"
import SealonApplication from '../../../components/SealonApplication'
import SealonProduct from "../../../components/SealonProduct";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";

const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_SEALON.pdf",
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

const Sealon = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <SealonHero />
      <SealonApplication />
      <TechnicalDocumentation documents={documents} />
      
      <SealonProduct />
      <Footer />
    </div>
  );
};

export default Sealon;
