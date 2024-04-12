'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { TakeToActionDecorator } from "@/components/layout/BackgroundDecorator";

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
const TakeToAction = ({
  className = "",
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const isDesktopXL = useMediaQuery("(min-width: 1280px)");
  return (
    <div
      className={`relative mt-[520px] max-lg:mt-[300px] flex flex-col ${className}`}
      id={id}
    >
      <TakeToActionDecorator/>
      <div className="container relative flex flex-col items-center justify-center gap-8 max-xl:mx-auto h-[500px]">
        <Image
          src={"/static/images/landing/take-to-action/grid.svg"}
          width={1586}
          height={608}
          className={`absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1586px] max-lg:w-full z-[-2] opacity-40`}
          alt="Grid"
        />
        <Image
          src={"/static/images/landing/take-to-action/radial-gradient.svg"}
          width={1246}
          height={1246}
          className={`absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1246px] z-[-1] max-lg:w-[80%]`}
          alt="Radial Gradient"
        />
        <Image
          src={"/static/images/landing/take-to-action/star.svg"}
          width={55}
          height={55}
          className={`absolute top-[50px] left-[280px] w-[55px] z-[0] max-xl:hidden`}
          alt="Star"
        />
        <Image
          src={"/static/images/landing/take-to-action/star.svg"}
          width={87}
          height={87}
          className={`absolute top-[140px] right-[100px] w-[87px] z-[0] max-xl:hidden`}
          alt="Star"
        />
        <div className="text-white font-medium text-[75px] max-sm:text-[48px]">
          Buy Here!
        </div>
        <div className="text-white text-xs font-normal flex items-center px-[20px] justify-center py-[10px] mt-2 cursor-pointer w-[370px] max-xs:w-[90%] border-2 border-white rounded-[5px] gap-3">
          <Image
            src={"/static/images/landing/liquidity-burned/copy.svg"}
            width={18}
            height={18}
            className={`w-[18px]`}
            alt="copy"
          />
          <p className="overflow-hidden text-nowrap text-ellipsis w-[90%]">
            0xe07C2bdbb8C787962C2C6e93C11a152110E7E4d2
          </p>
        </div>
      </div>
    </div>
  );
};

export default TakeToAction;
