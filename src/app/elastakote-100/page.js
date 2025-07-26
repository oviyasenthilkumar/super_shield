
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Elastakote100Hero from "../../../components/Elastakote100Hero"
import Elastakote100Application from '../../../components/Elastakote100Application'

import SealonProduct from "../../../components/SealonProduct";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
const documents = [
  {
    title: "Technical Datasheet",
    type: "external",
    href: "/ProductCatalogueModal",
  },
  {
    title: "Safety Datasheet",
    type: "download",
    href: "/tech_document/sds_elastakote.pdf",
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
const elastakote100 = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <Elastakote100Hero />
      <Elastakote100Application />
      <TechnicalDocumentation documents={documents} />
      <SealonProduct />
      <Footer />
    </div>
  );
};

export default elastakote100;
