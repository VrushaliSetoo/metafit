import Link from "next/link";
import Logo from "./Logo";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa";

import Facebook from "./socialIcons/facebook";
import Twitter from "./socialIcons/twitter";
import Youtube from "./socialIcons/youtube";
import Linkedin from "./socialIcons/linkedin";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

interface CategoryLink {
  id: string;
  attributes: {
    name: string;
    slug: string;
  };
}

function FooterLink({ url, text }: FooterLink) {
  return (
    <li className="flex">
      <Link
        href={url}
        className={`px-4 text-center text-sm font-semibold lg:border-e-[3px]`}
      >
        {text}
      </Link>
    </li>
  );
}

function CategoryLink({ attributes }: CategoryLink) {
  return (
    <li className="flex">
      <Link
        href={`/blog/${attributes.slug}`}
        className="hover:dark:text-violet-400"
      >
        {attributes.name}
      </Link>
    </li>
  );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case "WEBSITE":
      return <CgWebsite />;
    case "TWITTER":
      return <Twitter />;
    case "YOUTUBE":
      return <Youtube />;
    case "DISCORD":
      return <FaDiscord />;
    case "FACEBOOK":
      return <Facebook />;
    case "LINKEDIN":
      return <Linkedin />;
    default:
      return null;
  }
}

export default function Footer({
  logoUrl,
  logoText,
  menuLinks,
  categoryLinks,
  legalLinks,
  socialLinks,
}: {
  logoUrl: string | null;
  logoText: string | null;
  menuLinks: Array<FooterLink>;
  categoryLinks: Array<CategoryLink>;
  legalLinks: Array<FooterLink>;
  socialLinks: Array<FooterLink>;
}) {
  return (
    <>
      <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between max-w-6xl px-5 xl:px-0 mx-auto py-16">
        <div className="flex justify-center lg:justify-start flex-col gap-9">
          <Logo src={logoUrl}>
            {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
          </Logo>
          <div className="flex justify-center lg:justify-start gap-8">
            {socialLinks.map((link: FooterLink) => {
              return (
                <a
                  key={link.id}
                  rel="noopener noreferrer"
                  href={link.url}
                  title={link.text}
                  target={link.newTab ? "_blank" : "_self"}
                  className="w-7 h-7"
                >
                  <RenderSocialIcon social={link.social} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex   flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-0 ">
          {menuLinks.map((link: FooterLink) => (
            <FooterLink key={link.id} {...link} />
          ))}
        </div>
      </div>
      <div className="py-5 text-center bg-[#dbf2ff]">
        <p className="text-xs">
          {" "}
          ©{new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </>
  );
}
