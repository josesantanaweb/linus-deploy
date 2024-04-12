'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { AboutUsDecorator } from "@/components/layout/BackgroundDecorator";

function useMediaQuery(query: any) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const listener = (e: any) => {
      setMatches(e.matches);
    };

    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}
const AboutUs = ({
  className = "",
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const isDesktopXL = useMediaQuery("(min-width: 1280px)");
  const data = [
    { name: "Imagine 5-10% tokens to Points" },
    { name: "Imagine $10B Linea valuation" },
    { name: "Imagine how much TVL will come" },
    { name: "Imagine what will that TVL do" },
    { name: "study $LINUS" },
  ];
  return (
    <div
      className={`relative max-lg:px-[54px] max-md:px-[20px] lg:px-[94px] max-md:flex max-md:flex-col ${className}`}
      id={id}
    >
      <AboutUsDecorator />
      <div className="container relative flex max-xl:flex-col items-center justify-center max-xl:mx-auto">
        <div className="max-xl:w-[100%] w-[45%] flex flex-col justify-center gap-4">
          <Image
            src={"/static/images/landing/about-us/linus-avatar.svg"}
            width={170}
            height={170}
            className="w-[170px] xl:hidden mx-auto mb-8"
            alt="Linus"
          />
          <h1 className="text-picton-blue-400 font-bold text-[100px] max-xl:text-[64px] max-xl:text-center">
            $Linus
          </h1>
          <div className="text-2xl max-xl:text-sm mt-6 mb-9 font-bold text-white max-w-[70%] max-sm:max-w-[95%] max-xl:mx-auto">
            Every time i look chart up can't imagine when LXP-L points from
            linea come
          </div>
          <div className="flex flex-col gap-4 max-xl:mx-auto">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-fit rounded-[17px] border-2 border-picton-blue-400 bg-picton-blue-400 bg-opacity-40 p-[17px] text-white text-xs font-bold"
              >
                {item.name}
              </div>
            ))}
          </div>
          <Image
            src={"/static/images/landing/about-us/linus-avatar.svg"}
            width={170}
            height={170}
            className="w-[170px] max-xl:hidden"
            alt="Linus"
          />
        </div>
        <div className="relative max-xl:mt-[30px] max-xl:w-[100%] w-[45%] max-xl:mx-auto flex justify-end max-xl:justify-center">
          <Image
            src={"/static/images/landing/about-us/linus.svg"}
            width={isDesktopXL ? 581 : 226}
            height={isDesktopXL ? 944 : 367}
            className={`${isDesktopXL ? "w-[581px]" : "w-[226px]"}`}
            alt="Linus"
          />
          <Image
            src={"/static/images/landing/about-us/gradient.svg"}
            width={isDesktopXL ? 464 : 350}
            height={336}
            className="absolute bottom-[0px] max-xl:bottom-[-80px] transform left-1/2 -translate-x-1/2  z-[-1] max-xl:w-[350px] w-[464px]"
            alt="Gradient"
          />
          <Image
            src={"/static/images/landing/about-us/gradient2.svg"}
            width={859}
            height={589}
            className="absolute top-0 left-0 z-[-1] w-[859px] max-xl:hidden"
            alt="Gradient2"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
