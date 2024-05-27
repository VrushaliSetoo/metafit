export default function QBosonBuildsTrustAnimation() {
  const ImageParagraphData = {
    heading: "Q-boson build trust in every salesforce realase",
    description: [
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae illo similique quam, neque ut iure earum autem beatae. Eos vitae fugit, labore ipsa cumque expedita est excepturi molestias sint!",
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae illo similique quam, neque ut iure earum autem beatae. Eos vitae fugit, labore ipsa cumque expedita est excepturi molestias sint!",
    ],
    images: [
      { src: "/images/indianPatent.svg", alt: "image alt" },
      { src: "/images/USPatent.svg", alt: "image alt" },
    ],
  };
  return (
    <>
      <div className="flex justify-center gap-10 items-center ">
        {ImageParagraphData.images.map((image, index) => {
          return (
            <div className="" key={index}>
              <img
                className=" w-24 sm:w-24 lg:w-32  h-auto"
                alt={image.alt}
                src={image.src}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
