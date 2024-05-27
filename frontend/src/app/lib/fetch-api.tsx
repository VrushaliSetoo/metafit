import { getStrapiURL } from "./api-helpers";

export async function fetchAPI(query: string, variables: any) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    // Merge default and user options
    const mergedOptions = {
      // next: { revalidate: 60 },
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    };

    // Build request URL
    const requestUrl = `${getStrapiURL()}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}
