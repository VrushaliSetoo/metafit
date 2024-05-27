"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function QualitiaCustomersAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  const leftImagesRef = useRef(null);
  const rightImagesRef = useRef(null);
  const customersData = {
    Heading: "Qualitia Customers",
    customerIconsLeft: [
      { src: "/customersImage/PWC.png", alt: "PWC" },
      { src: "/customersImage/Deloitte.png", alt: "Deloitte" },
      { src: "/customersImage/CIBC.png", alt: "CIBC" },
      { src: "/customersImage/pitney bowes.png", alt: "pitney bowes" },
      { src: "/customersImage/MetLife.jpeg", alt: "MetLife" },
      { src: "/customersImage/HDFC.png", alt: "HDFC" },
      { src: "/customersImage/Springer.png", alt: "Springer" },
      { src: "/customersImage/PTC.png", alt: "PTC" },
      { src: "/customersImage/Capita.png", alt: "Capita" },
    ],
    customerIconsRight: [
      { src: "/customersImage/newrez.png", alt: "newrez" },
      { src: "/customersImage/BSE.png", alt: "BSE" },
      { src: "/customersImage/CDSL.png", alt: "CDSL" },
      { src: "/customersImage/GE healthcare.png", alt: "GE healthcare" },
      { src: "/customersImage/Prudential.png", alt: "Prudential" },
      { src: "/customersImage/Philips.png", alt: "Philips" },
      { src: "/customersImage/Nuance.png", alt: "Nuance" },
      { src: "/customersImage/Whirpool.png", alt: "Whirpool" },
      { src: "/customersImage/EbixCash.png", alt: "EbixCash" },
    ],
    buttonText: "See more",
  };
  useEffect(() => {
    gsap.fromTo(
      leftImagesRef.current,
      { x: "-100%" },
      {
        x: "0%",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftImagesRef.current,
          start: "top 80%",
          end: "top 30%",

          scrub: true,
        },
      }
    );

    gsap.fromTo(
      rightImagesRef.current,
      { x: "100%" },
      {
        x: "0%",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightImagesRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <>
      <div className=" pt-10  overflow-y-hidden">
        <div className="flex gap-3">
          <div
            ref={leftImagesRef}
            className="slide-in-left left-images grid sm:grid-cols-3 lg:grid-cols-3 gap-3 pt-5 pb-2 w-1/2"
          >
            {customersData.customerIconsLeft.map((customer, index) => (
              <div
                className="rounded-md flex justify-center items-center w-8/12 sm:w-full mx-auto slide-in"
                key={index}
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
              >
                <img
                  key={index}
                  className="h-20 w-24 object-contain"
                  src={customer.src}
                  alt={customer.alt}
                />
              </div>
            ))}
          </div>
          <div
            ref={rightImagesRef}
            className="slide-in-right right-images grid sm:grid-cols-3 lg:grid-cols-3 gap-3 pt-5 pb-2 w-1/2"
          >
            {customersData.customerIconsRight.map((customer, index) => (
              <div
                className="rounded-md flex justify-center items-center w-8/12 sm:w-full mx-auto slide-in"
                key={index}
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
              >
                <img
                  key={index}
                  className="h-20 w-24 object-contain"
                  src={customer.src}
                  alt={customer.alt}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-xl pt-16 pb-4">
          <button className="border border-[#032d60] rounded-full h-12 w-36 text-lg text-[#032d60] font-bold">
            See more
          </button>
        </div>
      </div>
    </>
  );
}
