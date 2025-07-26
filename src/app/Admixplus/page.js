
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import AdmixplusHero from "../../../components/AdmixplusHero"
import AdmixPlusApplication from '../../../components/AdmixPlusApplication'

import RelatedProductsPage from "../../../components/RelatedProduct";

import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
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

const Admixplus = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <AdmixplusHero />
      <AdmixPlusApplication />
      <TechnicalDocumentation documents={documents}/>
      <RelatedProductsPage />

      <Footer />
    </div>
  );
};

export default Admixplus;
