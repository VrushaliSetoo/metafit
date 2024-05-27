import RichText from "../RichText";
import QBosonBuildsTrustAnimation from "./qBosonBuildsTrust";
import CICDAnimation from "./cicdAnimation";
import DevelopmentProcessAnimation from "./developmentProcess";
import FallbackAnimation from "./fallback";
import IntegratedTestingAnimation from "./integratedTesting";
import ProductEcosystemAnimation from "./productEcosystem";
import QualitiaCustomersAnimation from "./qualitiaCustomers";

interface AnimationProps {
  data: {
    titleAnimation: string;
    animationName:
      | "Development_process"
      | "Q_Boson_builds_trust"
      | "Qualitia_customers"
      | "Product_ecosystem"
      | "Integrated_testing"
      | "CI_CD";
    description: string;
  };
}

export default function Animation({ data }: AnimationProps) {
  const MAP_ANIMATIONS = {
    Development_process: DevelopmentProcessAnimation,
    Q_Boson_builds_trust: QBosonBuildsTrustAnimation,
    Qualitia_customers: QualitiaCustomersAnimation,
    Product_ecosystem: ProductEcosystemAnimation,
    Integrated_testing: IntegratedTestingAnimation,
    CI_CD: CICDAnimation,
  };

  const Component = MAP_ANIMATIONS[data.animationName] || FallbackAnimation;

  return (
    <div className="max-w-6xl mx-auto px-3 lg:px-0 py-10 flex flex-col gap-5">
      <h2 className="text-[#032d60] text-2xl sm:text-3xl lg:text-4xl text-center font-bold">
        {data.titleAnimation}
      </h2>
      {data?.description && (
        <div className="flex flex-col gap-3 text-center w-7/12  mx-auto">
          <RichText data={{ body: data.description }} />
        </div>
      )}
      <>
        <Component />
      </>
    </div>
  );
}
