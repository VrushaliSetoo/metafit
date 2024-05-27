import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "../lib/api-helpers";

interface FeaturesProps {
  data: {
    headingSectionsFeatures: string;
    descriptionSectionsFeatures: string;
    feature: Feature[];
  };
}

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface Feature {
  id: string;
  title: string;
  description: string;
  showLink: boolean;
  newTab: boolean;
  url: string;
  text: string;
  colour: string;
  media: Picture;
}

function Feature({
  title,
  description,
  media,
  showLink,
  newTab,
  url,
  text,
  colour = "",
}: Feature) {
  const imgUrl = getStrapiMedia(media?.data?.attributes.url);

  return (
    <div>
      <div className=" shadow-2xl relative rounded-2xl  flex justify-center items-center h-full pt-5 ">
        <svg
          className="w-full absolute top-0"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 792 206"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_1"
                data-name="Rectangle 1"
                width="786"
                height="196.277"
                fill={colour}
              />
            </clipPath>
            <clipPath id="clip-Purple">
              <rect width="792" height="206" />
            </clipPath>
          </defs>
          <g id="Purple" clip-path="url(#clip-Purple)">
            <g
              id="Group_1"
              data-name="Group 1"
              transform="translate(3 4)"
              clip-path="url(#clip-path)"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M337.5,54.5A776.409,776.409,0,0,1,786,196.277V29.5A29.5,29.5,0,0,0,756.5,0H29.5A29.5,29.5,0,0,0,0,29.5V95.6A779.057,779.057,0,0,1,250.5,54.5Z"
                fill={colour}
              />
            </g>
          </g>
        </svg>
        <div className="p-8 pt-0 flex flex-col items-start justify-between ">
          <Image
            src={imgUrl || media?.data?.attributes.url}
            alt={media?.data?.attributes.alternativeText || "none provided"}
            className="object-contain pt-7"
            width={80}
            height={80}
          />
          <div className="flex flex-col justify-between">
            <p className="text-[22px] py-6 w-11/12 text-[#032d60] min-h-40 ">
              {description}
            </p>
            {showLink && url && text && (
              // <div>
              <Link
                href={url}
                target={newTab ? "_blank" : "_self"}
                className="flex justify-between w-full items-center mt-auto text-[#2ba7ee]"
              >
                {text}
                <svg
                  className="w-5 h-5 fill-[#2ba7ee]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </Link>
              // </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Features({ data }: FeaturesProps) {
  return (
    <div className="max-w-6xl mx-auto py-5 sm:py-10 px-4 lg:px-4">
      <div>
        <h2 className="text-[#032d60] text-center font-bold text-3xl w-8/12 mx-auto mb-14">
          {data.headingSectionsFeatures}
        </h2>
        {data.descriptionSectionsFeatures && (
          <p className="dark:text-gray-400">
            {data.descriptionSectionsFeatures}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5  lg:gap-20">
          {data.feature.map((feature: Feature, index: number) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
