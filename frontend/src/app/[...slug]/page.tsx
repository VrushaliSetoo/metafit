import { sectionRenderer } from "@/app/utils/section-renderer";
import { Metadata } from "next";
import { getPageBySlug } from "@/app/lib/get-page-by-slug";
import { FALLBACK_SEO } from "@/app/utils/constants";

type Props = {
  params: {
    lang: string;
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getPageBySlug({ slug: params.slug[0] });
  

  if (!page?.pages.data[0]?.attributes?.seo) return FALLBACK_SEO;
  const metadata = page.pages?.data[0]?.attributes.seo;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
  };
}

export default async function PageRoute({ params }: Props) {
  const page = await getPageBySlug({ slug: params.slug[0] });
  if (page?.pages.data.length === 0) return null;
  const contentSections = page?.pages.data[0].attributes.contentSections;
  return contentSections?.map((section: any, index: number) =>
    sectionRenderer(section, index)
  );
}
