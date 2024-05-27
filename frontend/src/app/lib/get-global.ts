import { fetchAPI } from "./fetch-api";

export async function getGlobal(variables: any = {}) {
  const query = `
  query {
    global {
      data {
        attributes {
          metadata {
            id
            metaTitle
            metaDescription
          }
          favicon {
            data {
              attributes {
                url
              }
            }
          }
          notificationBanner {
            type
            heading
            text
            show
            link {
              url
              newTab
              text
            }
          }
          navbar {
            links {
              url
              newTab
              text
            }
            button {
              url
              newTab
              text
              type
            }
            navbarLogo {
              logoImg {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
              logoText
            }
          }
          footer {
            footerLogo {
              logoImg {
                data {
                  attributes {
                    url
                  }
                }
              }
              logoText
            }
            menuLinks {
              url
              newTab
              text
            }
            legalLinks {
              url
              newTab
              text
            }
            socialLinks {
              url
              newTab
              text
              social
            }
            categories {
              data {
                attributes {
                  name
                  slug
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
