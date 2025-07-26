import { gql } from "@apollo/client";
import client from "../lib/apollo-client"; 

export default function ProductPage({ product }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="mt-2 text-gray-600">{product.description}</p>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Brochure</h2>
        <a
          href={product.brochureFile?.mediaItemUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {product.brochureFile?.title}
        </a>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query GetAllProductSlugs {
        products {
          nodes {
            slug
          }
        }
      }
    `,
  });

  const paths = data.products.nodes.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query GetProductBySlug($slug: ID!) {
        product(id: $slug, idType: SLUG) {
          title
          description
          brochureFile {
            mediaItemUrl
            title
          }
          
        }
      }
    `,
    variables: { slug: params.slug },
  });

  return {
    props: {
      product: data.product,
    },
  };
}
