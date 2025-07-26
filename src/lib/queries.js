import { gql } from "@apollo/client";
export const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    posts(where: { categoryName: "projects" }, first: 1000) {
      nodes {
        id
        title
        projectFields {
          orderNum
          projectTitle
          projectLocation
          projectImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;


export const GET_ALL_RESOURCES = gql`
  query GetAllResourcesFromPosts {
    posts(where: { categoryName: "resources" }, first: 100) {
      nodes {
        title

        resourceTypes {
          nodes {
            name
          }
        }
        productCategories {
          nodes {
            name
          }
        }
        productFilters {
          nodes {
            name
          }
        }

        resources {
          title
          description
          category
          shareUrl
          faq {
            question
            answer
            question1
            answer1
            question2
            answer2
          }
          videoUrl {
            node {
              id
              uri
            }
          }
          downloadFile {
            node {
              id
              uri
              sourceUrl
              mediaDetails {
                sizes {
                  name
                  sourceUrl
                }
              }
            }
          }
          filters {
            productcheckbox
            resourcetypecheckbox
            productcategorycheckbox
          }
        }
      }
    }

    allResourceTypes: resourceTypes(first: 100) {
      nodes {
        name
      }
    }
    allProductCategories: productCategories(first: 100) {
      nodes {
        name
      }
    }
    allProducts: productFilters(first: 100) {
      nodes {
        name
      }
    }
  }
`; 