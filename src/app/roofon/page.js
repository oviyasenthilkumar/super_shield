
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import RoofonHero from "../../../components/RoofonHero"
import RoofonApplication from '../../../components/RoofonApplication'

import SealonProduct from "../../../components/SealonProduct";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_Roofon.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "download",
    href: "/tech_document/sds_roofon.pdf",
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
const Roofon = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <RoofonHero />
      <RoofonApplication />
      <TechnicalDocumentation documents={documents} />
      <SealonProduct />
      <Footer />
    </div>
  );
};

export default Roofon;
