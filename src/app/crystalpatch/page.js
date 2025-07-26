
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import CrystalmixPatch from "../../../components/CrystalmixPatchHero"
import AdmixApplication from '../../../components/AdmixApplication'

import RelatedProductsPage from "../../../components/RelatedProduct";
import CrystalPatchApplication from "../../../components/CrystalPatchApplication";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_CRYSTALPATCH.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "download",
    href: "/tech_document/sds_crystalpatch.pdf",
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
const Crystalpatch = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs/>
      <CrystalmixPatch />
      <CrystalPatchApplication/>
      <TechnicalDocumentation documents={documents}/>
      <RelatedProductsPage />
      <Footer/>
    </div>
  );
};

export default Crystalpatch;
