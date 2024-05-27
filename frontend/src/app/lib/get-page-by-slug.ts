import { fetchAPI } from "./fetch-api";

export async function getPageBySlug(variables: any = {}) {
  const query = `
  query pageBySlug($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          shortName
          heading
          description
          contentSections {
            ... on ComponentSectionsHomeHero {
              titleHomeHero: title
              descriptionHomeHero: description
              heroFeatures {
                inputText
              }
            }
            ... on ComponentSectionsClickToAction {
              titleClickToAction: title
              backgroundColor
              textColor
              action {
                url
                newTab
                text
                type
              }
            }
            ... on ComponentSectionsFeatureColumnsGroup {
              features {
                title
                description
                icon {
                  data {
                    attributes {
                      name
                      url
                    }
                  }
                }
              }
            }
            ... on ComponentSectionsBottomActions {
              titleBottomActions: title
              buttonsBottomActions: buttons {
                url
                newTab
                text
                type
              }
              descriptionBottomActions: description
            }
            ... on ComponentSectionsFeatureColumnsGroup {
              features {
                title
                description
                icon {
                  data {
                    attributes {
                      name
                      url
                    }
                  }
                }
              }
            }
            ... on ComponentSectionsHero {
              titleHero: title
              descriptionSeHero: description
              buttons {
                url
                newTab
                text
                type
              }
              picture {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
            }
            ... on ComponentSectionsFeatureRowsGroup {
              features {
                title
                description
                link {
                  url
                  newTab
                  text
                }
                media {
                  data {
                    attributes {
                      name
                      url
                    }
                  }
                }
              }
            }
            ... on ComponentSectionsTestimonialsGroup {
              titleTestimonialsGroup: title
              descriptionTestimonialsGroup: description
              testimonials {
                picture {
                  data {
                    attributes {
                      name
                      url
                    }
                  }
                }
                text
                authorName
                fill
                designation
              }
            }
            ... on ComponentSectionsLargeVideo {
              titleLargeVideo: title
              descriptionLargeVideo: description
              poster {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
              video {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
            }
            ... on ComponentSectionsRichText {
              content
            }
            ... on ComponentSectionsPricing {
              titlePricing: title
              plans {
                name
                description
                isRecommended
                price
                pricePeriod
                product_features {
                  data {
                    attributes {
                      name
                      createdAt
                      updatedAt
                      publishedAt
                    }
                  }
                }
              }
            }
            ... on ComponentSectionsLeadForm {
              titleLeadForm: title
              emailPlaceholder
              submitButton {
                text
                type
              }
              location
              description
            }
            ... on ComponentSectionsFeatures {
              headingSectionsFeatures: heading
              descriptionSectionsFeatures: description
              feature {
                title
                description
                colour
                media {
                  data {
                    attributes {
                      name
                      url
                    }
                  }
                }
                showLink
                newTab
                url
                text
              }
            }
            ... on ComponentSectionsHeading {
              heading
              description
            }
            ... on ComponentSectionsAnimation {
              titleAnimation: title
              animationName
              description
            }
            ... on ComponentSectionsQBosonDeliver {
              titleBosonDeliver: title
              firstBlock {
                title
                subtitle
                description
              }
              secondBlock {
                title
                subtitle
                description
              }
              thirdBlock {
                title
                subtitle
                description
              }
            }
  
            __typename
          }
          seo {
            metaTitle
            metaDescription
            shareImage {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
        }
      }
    }
  }  
    `;
  return await fetchAPI(query, variables);
}
