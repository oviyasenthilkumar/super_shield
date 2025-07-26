
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import CleronHero from "../../../components/ClearonHero"
import ClearonApplication from '../../../components/ClearonApplication'

import SealonProduct from "../../../components/SealonProduct";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_Cleron.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "download",
    href: "/tech_document/sds_clearon.pdf",
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
const Cleron = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <CleronHero />
      <ClearonApplication />
      <TechnicalDocumentation documents={documents} />
      <SealonProduct />
      <Footer />
    </div>
  );
};

export default Cleron;
