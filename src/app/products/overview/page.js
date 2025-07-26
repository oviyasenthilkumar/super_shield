import AllProducts from "../../../../components/AllProducts";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import InnovationSolutions from "../../../../components/InnovationSolutions";
import ProductsOverviewHero from "../../../../components/ProductsOverviewHero";

export default async function ProductsOverview() {
  const res = await fetch("http://my-wp-site.local/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query GetPostsWithACF {
  posts( first: 100 , where: { categoryName: "products"}  ) {
    nodes {
      id
      title
      uri
      
      slug
     	posts {
        order
        postImage {
         node {
            sourceUrl
            altText
            title
          }
        }
        slug {
          edges {
            node {
              id
            }
          }
        }
        postTitle
        postDescription
        viewproduct {
          title
          url
        }
      }
    }
  }
}
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  console.log("GraphQL Raw Response:", JSON.stringify(json, null, 2));

  const posts = json?.data?.posts?.nodes || [];

  const sortedPosts = posts.sort((a, b) => {
    return (a.posts?.order ?? 999) - (b.posts?.order ?? 999);
  });
  
  return (
    <div>
      <Header />
      <ProductsOverviewHero />
      <Breadcrumbs />
      <InnovationSolutions />
      <AllProducts posts={sortedPosts} />
      <Footer />
    </div>
  );
}
