
import Breadcrumbs from "../../../../components/Breadcrumbs";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import InnovationSolutions from "../../../../components/InnovationSolutions";
import ProductsHero from "../../../../components/ProductsHero";

export default async function ProductPage() {
  return (
    <div>
      <Header />
      <ProductsHero />
      <Breadcrumbs />
      <InnovationSolutions />

      <Footer />
    </div>
  );
}

