"use client";

import { FC, useEffect, useRef, useState } from "react";
import image1 from "../../public/images/stacked-images/imageandtext-1.jpg";
import image2 from "../../public/images/stacked-images/imageandtext-2.jpg";
import image3 from "../../public/images/stacked-images/imageandtext-3.jpg";
import image4 from "../../public/images/stacked-images/imageandtext-4.jpg";
import image5 from "../../public/images/stacked-images/imageandtext-5.jpg";
import Image from "next/image";
import { useIsVisible } from "@/utils/useIsVisible";
import localFont from "@next/font/local";

const caviarBold = localFont({
  src: [
    {
      path: "../../public/fonts/caviar/CaviarDreams_Bold.ttf",
      weight: "400",
    },
  ],
});

const caviarRegular = localFont({
  src: [
    {
      path: "../../public/fonts/caviar/CaviarDreams.ttf",
      weight: "400",
    },
  ],
});

export const TopSection: FC<{ reverse?: boolean }> = ({ reverse = false }) => {
  const imageRef = useRef(null);
  const isVisibleImage = useIsVisible(imageRef);
  const textRef = useRef(null);
  const isVisibleText = useIsVisible(textRef);

  const isVisibleImageStyle = (delay: string, isLast: boolean = false) =>
    `opacity-100 -translate-x-4 right-0 delay-[${delay}ms] ${
      !isLast ? "hover:border-double hover:border-8 hover:border-primary" : ""
    }`;

  return (
    <div className="flex mt-24 px-12 md:px-44 flex-col lg:flex-row gap-36 lg:gap-20 justify-between items-center">
      <div
        ref={textRef}
        className={`order-${
          reverse ? 1 : 0
        } transition-opacity duration-700 text-4xl md:w-[500px] flex flex-col flex-grow gap-12 ${
          isVisibleText ? "opacity-100 translate-y-4" : "opacity-0"
        }`}
      >
        <h3 className={`${caviarBold.className} text-primary text-6xl`}>
          Dog Walking and Sitting
        </h3>
        <p className={`${caviarBold.className} text-2xl`}>
          Hi, I'm <span className="text-purple-700">Beth</span>! Welcome to
          Beth's Doggy Den. I offer a cozy home with a spacious garden and
          personalized care for your dog while you're on holiday. I also provide
          dog walking services to keep your furry friend active and happy. Rest
          assured, your dog will receive professional and attentive care in a
          safe, nurturing environment.
        </p>
      </div>
      <div ref={imageRef} className="relative">
        <Image
          src={image1}
          alt="background"
          className={`rounded-xl transition-opacity absolute duration-700 -right-24 hover:z-10 ${
            isVisibleImage
              ? "opacity-100 -translate-x-4 right-0 delay-[500ms] hover:border-double hover:border-8 hover:border-primary"
              : "opacity-0"
          }`}
        />
        <Image
          src={image2}
          alt="background"
          className={`rounded-xl transition-opacity duration-700 absolute -right-24 rotate-[6deg] hover:z-10 ${
            isVisibleImage
              ? "opacity-100 -translate-x-4 right-0 delay-[1000ms] hover:border-double hover:border-8 hover:border-primary"
              : "opacity-0"
          }`}
        />
        <Image
          src={image3}
          alt="background"
          className={`rounded-xl cursor-pointer transition-opacity duration-700 absolute -right-24 -rotate-6 hover:z-10  ${
            isVisibleImage
              ? "opacity-100 -translate-x-4 right-0 delay-[1500ms] hover:border-double hover:border-8 hover:border-primary"
              : "opacity-0"
          }`}
        />
        <Image
          src={image4}
          alt="background"
          className={`rounded-xl transition-opacity duration-700 absolute -right-24 rotate-12 hover:z-10 hover:delay-500 ${
            isVisibleImage
              ? "opacity-100 -translate-x-4 right-0 delay-[2000ms] hover:border-double hover:border-8 hover:border-primary"
              : "opacity-0"
          }`}
        />
        <Image
          src={image5}
          alt="background"
          className={`rounded-xl h-[500px] w-[500px] transition-opacity duration-700 -right-24 -rotate-[14deg] hover:z-10 ${
            isVisibleImage
              ? "opacity-100 -translate-x-4 right-0 delay-[2500ms]"
              : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};
