
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import WapprimeHero from "../../../components/wapprimeHero"
import WapprimeApplication from '../../../components/WapprimeApplication'

import SealonProduct from "../../../components/SealonProduct";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_Waprime.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "download",
    href: "/tech_document/sds_wapprime.pdf",
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
const Wapprime = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <WapprimeHero />
      <WapprimeApplication />
      <TechnicalDocumentation documents={documents}/>
      <SealonProduct />
      <Footer />
    </div>
  );
};

export default Wapprime;
