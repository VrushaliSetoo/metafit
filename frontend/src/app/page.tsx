import { getPageBySlug } from "./lib/get-page-by-slug";
import { sectionRenderer } from "./utils/section-renderer";

export default async function RootRoute() {
  try {
    const page = await getPageBySlug({ slug: "home" });

    if (page.error && page.error.status == 401)
      throw new Error(
        "Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/"
      );

    if (page.pages.data.length === 0) return null;
    const contentSections = page.pages.data[0].attributes.contentSections;
    return contentSections.map((section: any, index: number) =>
      sectionRenderer(section, index)
    );
  } catch (error: any) {
    window.alert("Missing or invalid credentials");
  }
}
