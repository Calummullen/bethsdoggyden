import { useIsVisible } from "@/utils/useIsVisible";
import localFont from "@next/font/local";
import { FC, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import fb from "../../public/images/logos/facebook.png";
import ig from "../../public/images/logos/instagram.png";
import mobile from "../../public/images/logos/mobile.png";
import email from "../../public/images/logos/email2.png";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  mobile: string;
  message: string;
};

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>();
  console.log(isValid);

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const textRef = useRef(null);
  const isVisibleText = useIsVisible(textRef);
  return (
    <div className="px-12 lg:px-32 xl:px-44 py-12 bg-purple-100 flex flex-col gap-24">
      <div
        ref={textRef}
        className={`flex flex-col gap-4 transition-all duration-700 relative -left-12 border-b-[1px] pb-12 border-primary ${
          isVisibleText ? "opacity-100 translate-x-0 left-0" : "opacity-0"
        }`}
      >
        <h3 className={`${caviarBold.className} text-6xl text-primary`}>
          Contact
        </h3>
        <p className={`${caviarRegular.className} text-3xl`}>
          Please contact me on any of the below platforms
        </p>
        <p className={`${caviarRegular.className} text-xl`}>
          Alternatively, fill out the contact form and I'll respond as soon as
          possible
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-24">
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
            href="+447704742818"
            isLink={false}
            animationDelay="md:delay-[1000ms]"
          />
          <ContactInfo
            imageSrc={email}
            title="bethirving123@hotmail.co.uk"
            href="bethirving123@hotmail.co.uk"
            isLink={false}
            animationDelay="md:delay-[1500ms]"
          />
        </div>

        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`flex flex-col gap-12  ${caviarBold.className}`}
          >
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <input
                className="p-2  focus:!border-primary"
                type="text"
                {...register("name", {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                className="p-2"
                type="email"
                {...register("email", {
                  required: true,
                })}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Mobile</label>
              <input
                className="p-2"
                type="tel"
                {...register("mobile", {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Message</label>
              <textarea
                rows={5}
                cols={1}
                className="p-2"
                {...register("message", {
                  required: true,
                })}
              />
            </div>
            <div>
              <button
                disabled={!isValid}
                className=" bg-primary rounded-md py-4 px-8 hover:bg-opacity-80 disabled:bg-gray-400"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
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
      className={`transition-all  duration-700 relative ${animationDelay} -left-12 ${
        isVisibleImage ? "opacity-100 translate-x-0 left-0" : "opacity-0"
      }`}
    >
      <a
        href={
          isLink ? href : title.includes("@") ? `mailto:${href}` : `tel:${href}`
        }
        className={`flex flex-col gap-12 text-center items-center  ${
          title !== "Mobile" ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <Image
          width={200}
          height={200}
          className=""
          src={imageSrc}
          alt={imageSrc.src}
        />
        <h3
          className={`md:text-3xl [overflow-wrap:anywhere] text-4xl ${caviarBold.className}`}
        >
          {title}
        </h3>
      </a>
    </div>
  );
};
