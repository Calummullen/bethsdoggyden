import { useIsVisible } from "@/utils/useIsVisible";
import localFont from "@next/font/local";
import { FC, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import fb from "../../public/images/logos/facebook.png";
import ig from "../../public/images/logos/instagram.png";
import mobile from "../../public/images/logos/mobile.png";

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

export const Contact: FC = () => {
  const textRef = useRef(null);
  const isVisibleText = useIsVisible(textRef);
  return (
    <div className="px-12 lg:px-32 xl:px-44 py-12 bg-purple-100 flex flex-col gap-24">
      <div
        ref={textRef}
        className={`transition-all duration-700 relative -left-12 ${
          isVisibleText ? "opacity-100 translate-x-0 left-0" : "opacity-0"
        }`}
      >
        <h3 className={`${caviarBold.className} text-5xl text-primary`}>
          Contact
        </h3>
        <p className={`${caviarRegular.className} text-2xl`}>
          Please contact me on any of the below platforms
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-24 md:gap-4 justify-evenly">
        <ContactInfo
          imageSrc={fb}
          title="Facebook"
          href="https://www.facebook.com/bethspawsitivepooches"
        />
        <ContactInfo
          imageSrc={ig}
          title="Instagram"
          href="https://www.instagram.com/bethsdoggyden/?hl=en-gb"
          animationDelay="md:delay-[750ms]"
        />
        <ContactInfo
          imageSrc={mobile}
          title="07704742818"
          href="javascript:"
          isLink={false}
          animationDelay="md:delay-[1000ms]"
        />
      </div>
    </div>
  );
};

const ContactInfo: FC<{
  imageSrc: StaticImageData;
  title: string;
  href: string;
  animationDelay?: string;
  isLink?: boolean;
}> = ({
  imageSrc,
  title,
  href,
  animationDelay = "md:delay-[500ms]",
  isLink = true,
}) => {
  const imageRef = useRef(null);
  const isVisibleImage = useIsVisible(imageRef);
  return (
    <div
      ref={imageRef}
      className={`transition-all duration-700 relative ${animationDelay} -left-12 ${
        isVisibleImage ? "opacity-100 translate-x-0 left-0" : "opacity-0"
      }`}
    >
      <a
        href={isLink ? href : `tel:${href}`}
        className={`flex flex-col gap-12 items-center ${
          title !== "Mobile" ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <Image
          className="md:w-[200px] md:h-[200px] w-[300px] h-[300px]"
          src={imageSrc}
          alt={imageSrc.src}
        />
        <h3 className={`text-4xl ${caviarBold.className}`}>{title}</h3>
      </a>
    </div>
  );
};
