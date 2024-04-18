'use client'
import Image from "next/image";
import { TakeToActionDecorator } from "@/components/layout/BackgroundDecorator";
import useMediaQuery  from "@/hooks/useMediaQuery";

const TakeToAction = ({
  className = "",
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const isDesktopXL = useMediaQuery("(min-width: 1280px)");
  const mainBrands = [
    {
      logo: '/static/images/landing/take-to-action/linex.svg'
    },
    {
      logo: '/static/images/landing/take-to-action/llama-swap.svg'
    },
    {
      logo: '/static/images/landing/take-to-action/nile.svg'
    },
  ]
  const brands = [
    {
      logo: '/static/images/landing/take-to-action/dexscreener.svg'
    },
    {
      logo: '/static/images/landing/take-to-action/defined.svg'
    },
    {
      logo: '/static/images/landing/take-to-action/dextools.svg'
    },
  ]
  return (
    <div
      className={`relative mt-[220px] max-lg:mt-[300px] flex flex-col ${className}`}
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
          className={`absolute top-[-180px] left-[280px] w-[55px] z-[0] max-xl:hidden`}
          alt="Star"
        />
        <Image
          src={"/static/images/landing/take-to-action/star.svg"}
          width={87}
          height={87}
          className={`absolute top-[-100px] right-[100px] w-[87px] z-[0] max-xl:hidden`}
          alt="Star"
        />
        <Image
          src={"/static/images/landing/take-to-action/blue.svg"}
          width={87}
          height={87}
          className={`absolute bottom-[-180px] left-[100px] w-[213px] h-[218px] z-[-1] max-lg:hidden`}
          alt="Blue"
        />
        <Image
          src={"/static/images/landing/take-to-action/pink.svg"}
          width={87}
          height={87}
          className={`absolute top-[0px] left-[250px] max-xl:left-[180px] w-[128px] h-[125px] z-[-1] max-lg:hidden`}
          alt="Pink"
        />
        <Image
          src={"/static/images/landing/take-to-action/green.svg"}
          width={87}
          height={87}
          className={`absolute top-[100px] right-[0px] w-[128px] h-[125px] z-[-1] max-lg:hidden`}
          alt="Green"
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
        <div className="flex items-center max-lg:justify-center max-lg:gap-5 max-lg:flex-col lg:w-[70%] w-[100%] justify-around mt-4">
          {
            mainBrands.map((item, index) => (
              <div className="flex items-center justify-center px-7 py-4 rounded-[17px] border-2 border-picton-blue-400 bg-picton-blue-400 bg-opacity-40 w-[30%] max-lg:w-[80%]">
                <Image src={item.logo} alt="" width={20} height={20} className="h-[40px] w-auto"/>
              </div>
            ))
          }
        </div>
        <div className="flex items-center max-lg:flex-col max-lg:gap-5 lg:w-[70%] w-[100%] justify-center mt-10">
          {
            brands.map((item, index) => (
              <div className="flex items-center justify-center w-[30%] max-lg:w-[80%]">
                <Image src={item.logo} alt="" width={20} height={20} className="h-[40px] w-auto"/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default TakeToAction;
