
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import InfronHero from "../../../components/InfronHero"
import InfronApplication from '../../../components/InfronApplication'

import SealonProduct from "../../../components/SealonProduct";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_Infron.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "external",
    href: "/tech_document/sds_infron.pdf",
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
const Infron = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <InfronHero />
      <InfronApplication />
      <TechnicalDocumentation documents={documents} />
      <SealonProduct />
      <Footer />
    </div>
  );
};

export default Infron;
