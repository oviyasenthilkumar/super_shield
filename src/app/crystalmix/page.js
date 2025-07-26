
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import CrystalmixHero from "../../../components/CrystalmixHero";
import AdmixApplication from '../../../components/AdmixApplication'

import RelatedProductsPage from "../../../components/RelatedProduct";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_CRYSTALMIX.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "download",
    href: "/tech_document/sds_crystalmix.pdf",
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
const Crystalmix = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs/>
      <CrystalmixHero />
      <AdmixApplication/>
      <TechnicalDocumentation documents={documents} />
      <RelatedProductsPage />
      <Footer/>
    </div>
  );
};

export default Crystalmix;
