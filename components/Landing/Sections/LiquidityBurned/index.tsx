'use client'
import Image from "next/image";
import { useRef } from "react";
import useMediaQuery  from "@/hooks/useMediaQuery";
import { LiquidityBurnedDecorator, LiquidityBurnedGradients } from "@/components/layout/BackgroundDecorator";
const LiquidityBurned = ({
  className = "",
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const isDesktopXL = useMediaQuery("(min-width: 1280px)");
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div
      className={`relative max-lg:px-[54px] max-md:px-[20px] lg:px-[94px] max-md:flex max-md:flex-col ${className}`}
      id={id}
    >
      <LiquidityBurnedGradients />
      <div className="container relative flex max-xl:flex-col items-center justify-center max-xl:mx-auto">
        <LiquidityBurnedDecorator />
        {/* <Image src={'/static/images/landing/liquidity-burned/grid.svg'} width={1586} height={608} className={`absolute right-[-20%] top-[100px] w-[1586px] z-[-1] opacity-40 max-xl:hidden`} alt="Grid"/> */}
        <div className="relative max-xl:hidden w-[45%] max-xl:mx-auto flex justify-end max-xl:justify-center">
          {/* <Image
            src={"/static/images/landing/liquidity-burned/linus-mobile.svg"}
            width={1080}
            height={1080}
            className={`w-[1080px] max-lg:hidden`}
            alt="Linus"
          /> */}
          <video
            className="w-[100%] max-lg:min-h-[500px] rounded-3xl"
            style={{ mixBlendMode: "lighten" }}
            autoPlay
            loop
            muted
          >
            <source
              src={"/static/videos/linus-flames.mp4"}
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className="relative max-xl:w-[100%] w-[45%] grid grid-cols-1 max-xl:flex max-xl:flex-col max-xl:gap-[10px] gap-4">
          <Image
            src={"/static/images/landing/liquidity-burned/gradient.svg"}
            width={564}
            height={336}
            className={`absolute right-[-50px] top-[150px] w-[564px] z-[-1] max-xl:hidden`}
            alt="Gradient"
          />
          <Image
            src={"/static/images/landing/liquidity-burned/gradient2.svg"}
            width={751}
            height={516}
            className={`absolute right-[-50px] top-[100px] w-[751px] z-[-1] max-xl:hidden`}
            alt="Gradient2"
          />
          <div
            className={`flex flex-col items-center justify-center max-xl:justify-self-auto justify-self-end max-xl:w-[100%] w-[70%] ${
              isDesktopXL
                ? "card"
                : "bg-curious-blue-400 bg-opacity-30 border-[5px] border-curious-blue-400"
            } rounded-[30px] px-[50px] py-[30px]`}
          >
            <div className="text-white text-[75px] max-2xl:text-[48px] max-xl:font-medium font-normal leading-[70px]">
              Fees?
            </div>
            <div className="text-white text-[75px] max-2xl:text-[55px] font-bold leading-[70px]">
              NONE!
            </div>
          </div>
          {/* <Image
            src={"/static/images/landing/liquidity-burned/linus-mobile.svg"}
            width={359}
            height={402}
            className={`absolute left-0 top-[80px] w-[359px] xl:hidden`}
            alt="Linus"
          /> */}
          <video
            className="w-[459px] rounded-3xl xl:hidden"
            style={{ mixBlendMode: "lighten" }}
            autoPlay
            loop
            muted
          >
            <source
              src={"/static/videos/linus-flames.mp4"}
              type="video/mp4"
            ></source>
          </video>
          <div
            className={`flex flex-col items-center justify-center max-xl:justify-self-auto justify-self-start max-xl:w-[100%] w-[70%] ${
              isDesktopXL
                ? "card"
                : "bg-curious-blue-400 bg-opacity-30 border-[5px] border-curious-blue-400"
            } rounded-[30px] px-[50px] py-[30px]`}
          >
            <div className="text-white text-[75px] font-normal max-xl:font-medium max-2xl:text-[48px] leading-[70px]">
              Liquidity?
            </div>
            <div className="text-white text-[75px] font-bold max-2xl:text-[55px] leading-[70px]">
              Burned!
            </div>
            <div className="text-white text-xs font-normal flex items-center px-[20px] justify-center py-[10px] mt-2 cursor-pointer border-opacity-20 max-xl:border-opacity-100 border-2 border-white rounded-[5px] gap-3 xl:w-[95%] xs:w-[400px] xl2:w-[420px] max-xs:w-[95%]">
              <Image
                src={"/static/images/landing/liquidity-burned/copy.svg"}
                width={18}
                height={18}
                className={`w-[18px]`}
                alt="copy"
              />
              <p className="overflow-hidden text-nowrap text-ellipsis w-[80%]">0xe07C2bdbb8C787962C2C6e93C11a152110E7E4d2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidityBurned;
