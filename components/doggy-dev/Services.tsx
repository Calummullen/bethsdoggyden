import Image, { StaticImageData } from "next/image";
import { FC, useRef, useState } from "react";
import image1 from "../../public/images/stacked-images/imageandtext-1.jpg";
import image2 from "../../public/images/stacked-images/imageandtext-2.jpg";
import image3 from "../../public/images/stacked-images/imageandtext-3.jpg";
import image4 from "../../public/images/stacked-images/imageandtext-4.jpg";
import image5 from "../../public/images/stacked-images/imageandtext-5.jpg";
import image6 from "../../public/images/stacked-images/imageandtext-5.jpg";
import rotate from "../../public/images/stacked-images/rotate.png";
import tap from "../../public/images/stacked-images/tap.png";
import next from "../../public/images/stacked-images/next.png";
import localFont from "@next/font/local";
import { useIsVisible } from "@/utils/useIsVisible";

const caviarRegular = localFont({
  src: [
    {
      path: "../../public/fonts/caviar/CaviarDreams.ttf",
      weight: "400",
    },
  ],
});

const caviarBold = localFont({
  src: [
    {
      path: "../../public/fonts/caviar/CaviarDreams_Bold.ttf",
      weight: "400",
    },
  ],
});

export const Services: FC = () => {
  const imageRef = useRef(null);
  const isVisibleImage = useIsVisible(imageRef);
  const textRef = useRef(null);
  const isVisibleText = useIsVisible(textRef);
  return (
    <div className="px-12 md:px-44 py-12 bg-gray-200 flex flex-col gap-12">
      <div
        ref={textRef}
        className={`transition-all duration-700 delay-500 relative -left-12 ${
          isVisibleText ? "opacity-100 translate-x-0 left-0" : "opacity-0"
        }`}
      >
        <h3 className={`${caviarBold.className} text-5xl text-primary`}>
          My Services
        </h3>
        <p className={`${caviarRegular.className} text-2xl`}>
          Some generic text about services. Some generic text about services.
          Some generic text about services.
        </p>
      </div>
      <div
        ref={imageRef}
        className={`grid transition-all delay-1000 duration-500 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 items-center justify-between text-center gap-12 mb-24 ${
          isVisibleImage ? "opacity-100 translate-y-12" : "opacity-0"
        }`}
      >
        <Tile
          image={image1}
          title="Dog Walking"
          description="Some description1"
        />
        <Tile
          image={image2}
          title="Dog Sitting"
          description="Some description2"
        />

        <Tile
          image={image3}
          title="Dog Holidays"
          description="Some description3"
        />

        <Tile
          image={image4}
          title="Some Service"
          description="Some description4"
        />
        <Tile
          image={image5}
          title="Another Service"
          description="Some description5"
        />

        <Tile
          image={image6}
          title="Different Service"
          description="Some description6"
        />
      </div>
    </div>
  );
};

const Tile: FC<{
  image: StaticImageData;
  title: string;
  description: string;
}> = ({ image, title, description }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    // <div className="flex flex-col gap-4 rounded-sm shadow-xl pb-6 duration-200 hover:ease-in-out hover:scale-105 scale-100 cursor-pointer">
    //   <div className="bg-transparent  h-[500px] group">
    //     <div className="relative w-full h-full transition-transform transform-3d group-hover:[transform:rotateY(180deg)]">
    //       <div className="absolute rounded-t-sm backface-hidden w-full h-full">
    //         <Image
    //           //   height={500}
    //           //   width={500}

    //           src={image}
    //           alt="tile image"
    //           className={`h-[500px]  object-cover`}
    //         />
    //       </div>
    //       <div
    //         className={`flex flex-col bg-primary items-center justify-center w-full h-full backface-hidden [transform:rotateY(180deg)]`}
    //       >
    //         <p className="text-3xl">Hello Jasmin Syms :)</p>
    //       </div>
    //     </div>
    //   </div>
    //   <h3 className={`${caviarBold.className} text-3xl`}>{title}</h3>
    //   <p className={`${caviarRegular.className} text-xl`}>{description}</p>
    // </div>

    <div className="flex perspective-1000 flex-col rounded-sm shadow-xl pb-6 duration-200 hover:ease-in-out hover:scale-105 scale-100 cursor-pointer">
      <div
        className={`relative transform-style-3d h-[500px] transition-transform duration-700 ${
          flipped ? "rotate-y-180" : ""
        }`}
        onClick={handleFlip}
      >
        <div className="absolute w-full h-full backface-hidden">
          <Image
            src={image}
            alt="tile image"
            className={`absolute object-cover`}
          />
          <Image
            height={40}
            width={40}
            src={tap}
            alt={"sdfsd"}
            className="absolute m-2 right-0 opacity-70"
          />
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-primary flex items-center justify-center p-4">
          <p className="text-center text-lg">
            This is the back of the card. Click to flip back to the image.
          </p>
        </div>
      </div>

      <h3
        className={`${caviarBold.className} ${
          flipped ? "text-purple-700" : "text-black"
        } text-5xl`}
      >
        {title}
      </h3>

      {/* <p className={`${caviarRegular.className} text-xl`}>{description}</p> */}
    </div>
  );
};
