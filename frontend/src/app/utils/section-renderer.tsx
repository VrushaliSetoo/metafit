import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Email from "../components/Email";
import HomeHero from "../components/HomeHero";
import ClickToAction from "../components/ClickToAction";
import RichText from "../components/RichText";
import Animation from "../components/Animation";
import QBosonDeliver from "../components/QBosonDeliver";

export function sectionRenderer(section: any, index: number) {
  switch (section.__typename) {
    case "ComponentSectionsHomeHero":
      return <HomeHero key={index} data={section} />;
      case "ComponentSectionsHero":
      return <Hero key={index} data={section} />;
    case "ComponentSectionsFeatures":
      return <Features key={index} data={section} />;
    case "ComponentSectionsTestimonialsGroup":
      return <Testimonials key={index} data={section} />;
    case "ComponentSectionsPricing":
      return <Pricing key={index} data={section} />;
    case "ComponentSectionsLeadForm":
      return <Email key={index} data={section} />;
    case "ComponentSectionsClickToAction":
      return <ClickToAction key={index} data={section} />;
    case "ComponentSectionsRichText":
      return <RichText key={index} data={section} />;
    case "ComponentSectionsAnimation":
      return <Animation key={index} data={section} />;
      case "ComponentSectionsQBosonDeliver":
    return <QBosonDeliver key={index} data={section} />;
    default:
      return null;
  }
}
