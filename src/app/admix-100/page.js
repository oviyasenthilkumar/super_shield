
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Admix100Hero from "../../../components/Admix100Hero"
import AdmixApplication from '../../../components/AdmixApplication'

import RelatedProductsPage from "../../../components/RelatedProduct";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_ADMIX_100.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "download",
    href: "/tech_document/sds_admix100.pdf",
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
const admix100 = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs/>
      <Admix100Hero />
      <AdmixApplication/>
      <TechnicalDocumentation documents={documents}/>
      <RelatedProductsPage />
      
      <Footer/>
    </div>
  );
};

export default admix100;
