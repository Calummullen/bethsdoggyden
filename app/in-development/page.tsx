"use client";

import Navbar from "@/components/doggy-dev/Navigation";
import localFont from "@next/font/local";
import { TopSection } from "@/components/doggy-dev/ImageAndText";
import { Services } from "@/components/doggy-dev/Services";
import { useRef } from "react";
import { ReviewSummary } from "@/components/doggy-dev/reviews/ReviewSummary";
import { Contact } from "@/components/doggy-dev/Contact";

const happyMemories = localFont({
  src: [
    {
      path: "../../public/fonts/happy-memories/Happy-Memories.ttf",
      weight: "400",
    },
  ],
});

const LandingPage = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const executeScroll = (view: ExecuteScrollType) => {
    switch (view) {
      case "home":
        homeRef.current?.scrollIntoView();
        break;
      case "about":
        aboutRef.current?.scrollIntoView();
        break;
      case "services":
        servicesRef.current?.scrollIntoView();
        break;
      case "reviews":
        reviewsRef.current?.scrollIntoView();
        break;
      case "contact":
        contactRef.current?.scrollIntoView();
        break;
    }
  };
  return (
    <div className="w-full">
      <Navbar executeScroll={(ref) => executeScroll(ref)} />
      <div ref={homeRef} className="flex flex-col mt-32 scroll-m-[128px]">
        {/* <Image src={background} alt="background" className="bg-fixed" /> */}
        <div className="bg-fixed bg-cover bg-[url('../public/images/background-3.jpg')] bg-no-repeat md:h-[800px]">
          <div
            className={`${happyMemories.className} flex flex-col items-center text-center my-24 mx-4 lg:m-48 gap-24`}
          >
            <h1 className="text-9xl font-bold text-primary">
              Beth's Doggy Den
            </h1>
            <p className="text-6xl font-bold text-primary">
              Your best friends second best friend ❤️
            </p>
          </div>
        </div>
        <div className="bg-white flex flex-col ">
          <div className="scroll-m-[128px]" ref={aboutRef}>
            <TopSection />
          </div>
          <div className="scroll-m-[128px]" ref={servicesRef}>
            <Services />
          </div>
          <div className="scroll-m-[128px]" ref={reviewsRef}>
            <ReviewSummary
              reviews={[
                { rating: 2, description: "Test" },
                { rating: 5, description: "Test2" },
              ]}
            />
          </div>
          <div className="scroll-m-[128px]" ref={contactRef}>
            <Contact />
          </div>
        </div>
        <footer>
          <div className="px-12 lg:px-32 xl:px-44 py-12 bg-gray-100 flex flex-col gap-24">
            Footer
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
