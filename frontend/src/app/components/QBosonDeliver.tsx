import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface QBosonDeliverBlockProps {
  title: string;
  subtitle: string;
  description: string;
}
interface QBosonDeliverProps {
  data: {
    titleBosonDeliver: string;
    firstBlock: QBosonDeliverBlockProps;
    secondBlock: QBosonDeliverBlockProps;
    thirdBlock: QBosonDeliverBlockProps;
  };
}

export default function QBosonDeliver({ data }: QBosonDeliverProps) {
  // TODO: STYLE THE MARKDOWN
  return (
    <div className="bg-[#032d60] py-5 sm:py-10 lg:py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-center text-3xl sm:w-7/12 font-semibold mx-auto py-6">
          {data.titleBosonDeliver}
        </h2>

        <div className="flex justify-between flex-wrap">
          <div className="flex justify-center items-center flex-col">
            <p className="text-white text-lg">{data.firstBlock.subtitle}</p>
            <h3
              className={`text-[#2ba7ee] text-3xl sm:tex-4xl lg:text-6xl font-bold `}
            >
              {data.firstBlock.title}
            </h3>
            <p className="text-white  w-9/12 text-center text-xl ">
              {data.firstBlock.description}
            </p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <p className="text-white text-lg">{data.secondBlock.subtitle}</p>
            <h3
              className={`text-[#2ba7ee]  text-3xl sm:tex-4xl lg:text-6xl font-bold `}
            >
              {data.secondBlock.title}
            </h3>
            <p className="text-white text-xl w-9/12 text-center ">
              {data.secondBlock.description}
            </p>
          </div>
          <div className="flex justify-center w-full items-center flex-col">
            <p className="text-white text-lg">{data.thirdBlock.subtitle}</p>
            <h3
              className={`text-[#2ba7ee] text-3xl mx-auto text-center w-4/12 order-2 sm:tex-4xl lg:text-6xl font-bold `}
            >
              {data.thirdBlock.title}
            </h3>
            <p className="text-white text-xl order-1 ">
              {data.thirdBlock.description}
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {featureData.features.map((feature, index) => {
            return (
              <div
                className={` text-center flex flex-col gap-3 ${
                  index !== 2 ? "" : " sm:col-span-2"
                }`}
                key={index}
              >
                <p className="text-white text-lg">{feature.subtitle}</p>
                <h3
                  className={`text-[#2ba7ee] text-3xl sm:tex-4xl lg:text-6xl sm:w-3/12 mx-auto font-bold ${
                    index == 2 ? "order-2" : "order-1"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-white text-lg ${
                    index == 2 ? "order-1" : "order-2"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}
