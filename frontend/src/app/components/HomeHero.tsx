import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../lib/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
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

interface HeroProps {
  data: {
    id: string;
    titleHomeHero: string;
    descriptionHomeHero: string;
    picture?: Picture;
    heroFeatures: any[];
  };
}

export default function HomeHero({ data }: HeroProps) {
  return (
    <div className="max-w-6xl mx-auto flex justify-center items-center py-10 lg:py-0 lg:h-[calc(100dvh-111px)] herosection">
      <div className="text-center text-[#032d60]">
        <HighlightedText
          text={data.titleHomeHero}
          tag="h1"
          className="text-2xl sm:text-4xl font-bold "
          // color="dark:text-violet-400"
        />
        <HighlightedText
          text={data.descriptionHomeHero}
          tag="p"
          className="text-xl sm:text-[22px] mt-2 mb-7"
          // color="dark:text-violet-400"
        />

        <ul className="flex flex-col sm:flex-row ">
          {data.heroFeatures.map(({ inputText }, index) => {
            return (
              <>
                <li
                  className={`px-14 text-lg  ${
                    index !== 2 ? "sm:border-e-[3px] border-[#139dec]" : ""
                  }`}
                  key={index}
                >
                  {inputText}
                </li>
                <li
                  className={` sm:hidden ${index !== 2 ? "block" : "hidden"}`}
                >
                  ----
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div className="absolute right-0 top-0 -z-10 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="w-40 lg:w-[600px]  h-auto"
          viewBox="0 0 589 231"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_704"
                data-name="Rectangle 704"
                width="589"
                height="230"
                transform="translate(777)"
                fill="#fff"
                stroke="#707070"
                stroke-width="1"
              />
            </clipPath>
            <clipPath id="clip-Artboard_1">
              <rect width="589" height="231" />
            </clipPath>
          </defs>
          <g
            id="Artboard_1"
            data-name="Artboard – 1"
            clip-path="url(#clip-Artboard_1)"
          >
            <g
              id="Mask_Group_1"
              data-name="Mask Group 1"
              transform="translate(-777)"
              clip-path="url(#clip-path)"
            >
              <circle
                id="Ellipse_50"
                data-name="Ellipse 50"
                cx="309.702"
                cy="309.702"
                r="309.702"
                transform="translate(691 -83.98) rotate(-45)"
                fill="#f6f6f6"
              />
              <path
                id="Path_31649"
                data-name="Path 31649"
                d="M.343,66.888V-.067H150.462V66.888a75.06,75.06,0,0,1-150.119,0Z"
                transform="translate(782.657 0.067)"
                fill="#75ccff"
                opacity="0.7"
              />
              <path
                id="Path_31650"
                data-name="Path 31650"
                d="M115.347,36.663V0h82.2V36.663a41.1,41.1,0,0,1-82.2,0Z"
                transform="translate(817.771 0.087)"
                fill="#99adfc"
              />
              <g
                id="Group_875"
                data-name="Group 875"
                transform="translate(806.962)"
              >
                <path
                  id="Path_31564"
                  data-name="Path 31564"
                  d="M69.8,117.631a51.152,51.152,0,0,0,51.1-51.1V-.067h-1.41v66.6a49.687,49.687,0,1,1-99.374,0V-.067H18.7v66.6A51.152,51.152,0,0,0,69.8,117.631Z"
                  transform="translate(-18.7 0.067)"
                  fill="#fffefd"
                />
              </g>
              <g
                id="Group_874"
                data-name="Group 874"
                transform="translate(818.415)"
              >
                <path
                  id="Path_31565"
                  data-name="Path 31565"
                  d="M66.942,106.356A39.511,39.511,0,0,0,106.41,66.888V-.067H105V66.888a38.058,38.058,0,0,1-76.117,0V-.067h-1.41V66.888A39.512,39.512,0,0,0,66.942,106.356Z"
                  transform="translate(-27.474 0.067)"
                  fill="#fffefd"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
