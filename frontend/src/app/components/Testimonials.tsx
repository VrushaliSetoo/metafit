import Image from "next/image";
import { getStrapiMedia } from "../lib/api-helpers";

interface Testimonial {
  text: string;
  authorName: string;
  designation: string;
  fill: string;
  picture: {
    data: {
      id: string;
      attributes: {
        name: string;
        alternativeText: string;
        url: string;
      };
    };
  };
}

interface TestimonialsProps {
  data: {
    id: string;
    titleTestimonialsGroup: string;
    description: string;
    testimonials: Testimonial[];
  };
}

function Testimonial({
  text,
  authorName,
  picture,
  fill,
  designation,
}: Readonly<Testimonial>) {
  const imageUrl = getStrapiMedia(picture?.data?.attributes.url);
  return (
    <div>
      <div className=" shadow-2xl relative rounded-2xl  flex justify-center items-center h-full pt-5 ">
        <svg
          className="w-full absolute top-0 scale-x-[-1]"
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
                fill={fill}
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
                fill={fill}
              />
            </g>
          </g>
        </svg>
        <div className="p-8 pt-0 flex flex-col items-start justify-between ">
          <div className="flex justify-center mt-[-60px] mx-auto relative">
            <Image
              className="pt-7 w-[100px] h-[100px] rounded-full  bg-slate-100"
              src={imageUrl ?? ""}
              width={100}
              height={100}
              alt={picture?.data?.attributes.alternativeText}
            />
            <img
              className=" w-6 h-6 rounded-full mb-0 mt-auto absolute top-auto bottom-0 right-0"
              src="/images/linkedin.png"
              alt={"linkedin image"}
            />
          </div>
          <div className="flex flex-col gap-5 justify-between mt-[30px]">
            <center>
              <h2 className=" text-lg font-semibold">{authorName}</h2>
              {/* <span className="text-sm text-gray-400">{designation}</span> */}
              <p className="text-sm text-gray-400 w-9/12 mt-2">{designation}</p>
            </center>
            <p className="text-[16px]  text-[#032d60] min-h-44 text-center ">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <section className="dark:bg-black dark:text-gray-100  m:py-12 lg:py-24 max-w-6xl mx-auto">
      <div className="container mx-auto py-4 space-y-2 text-center">
        <h1 className="text-[#032d60] text-center font-bold text-3xl w-8/12 mx-auto mb-14">
          {data.titleTestimonialsGroup}
        </h1>
        <p className="mt-4 text-lg text-center">{data.description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-20 sm:gap-6 lg:gap-[60px] mt-10">
        {data.testimonials.map((testimonial: Testimonial, index: number) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
