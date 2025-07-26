
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ElastakoteHero from "../../../components/ElastakoteHero"
import ElastakoteApplication from '../../../components/ElastakoteApplication'

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
const elastakote = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs/>
      <ElastakoteHero />
      <ElastakoteApplication/>
      <TechnicalDocumentation documents={documents}/>
      <SealonProduct />
      <Footer/>
    </div>
  );
};

export default elastakote;
