"use client";

import Image from "next/image";
import { FooterDecorator } from "@/components/layout/BackgroundDecorator";
import useMediaQuery from "@/hooks/useMediaQuery";
import Button from "@/components/UI/Button";

import TWITTER from "/public/static/images/footer/twitter.svg";
import TELEGRAM from "/public/static/images/footer/telegram.svg";

const brands = [
  {
    logo: "/static/images/footer/linea 2.svg",
  },
  {
    logo: "/static/images/footer/symbiosis.svg",
  },
];
export const FooterLanding = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <footer className="relative flex flex-col w-[100%] mx-auto">
      <FooterDecorator />
      <div className="mx-auto w-[90%] z-[10] mt-10 max-w-[1820px]">
        <div className="relative mx-auto w-[100%] h-[800px] flex items-start justify-between z-10">
          <div className="flex items-center justify-start mt-1 gap-8 max-lg:gap-1 max-lg:items-start max-lg:flex-col w-[50%]">
            <div className="text-white font-normal text-xs">2024 © LINUS</div>
          </div>
          <div className="relative flex items-start justify-start gap-3 max-lg:gap-1 flex-col ">
            <div className="flex items-center gap-2 w-[100%]">
              <div className="text-white font-normal text-xs whitespace-nowrap">
                Avaiable on
              </div>
              <Image
                src={"/static/images/footer/linea.svg"}
                width={82}
                height={14}
                alt="Blast"
                className="w-[82px]"
              />
            </div>
          </div>
          <div className="absolute flex max-lg:flex-col max-lg:gap-10 items-center justify-center top-[100px] transform -translate-x-1/2 left-1/2 w-[410px] max-lg:w-[290px] h-[300px] z-[1000]">
            <a target="_blank" href={'https://twitter.com/LinusOnLinea'}>
              <button className="absolute left-0 top-[150px] flex items-center justify-center px-[17px] py-[17px] text-sm font-normal transition rounded-full focus:outline-none border-2 border-white bg-opacity-40 bg-white hover:bg-picton-blue-400"> 
                <Image unoptimized={true} src={TWITTER} alt={'Twitter'} className="w-[16px] h-[16px]" />
              </button>
            </a>
            <a target="_blank" href={'https://t.co/LinusOnLinea'}>
              <button className="absolute right-0 top-[60px] max-lg:top-[80px] flex items-center justify-center px-[17px] py-[17px] text-sm font-normal transition rounded-full focus:outline-none border-2 border-white bg-opacity-40 bg-white hover:bg-picton-blue-400"> 
                <Image unoptimized={true} src={TELEGRAM} alt={'Telegram'} className="w-[16px] h-[16px]" />
              </button>
            </a>
          </div>
          <div className="absolute flex max-lg:flex-col max-lg:gap-10 items-center lg:items-end justify-center max-lg:justify-end bottom-0 transform -translate-x-1/2 left-1/2 w-[70%] max-xs:w-[95%] max-lg:w-[80%] h-[400px] max-lg:h-[380px]">
            <Image unoptimized={true} src={'/static/images/footer/yellow.svg'} alt={'Yellow'} className="absolute max-lg:hidden left-[-150px] top-[100px] w-[134px] h-[138px]" width={30} height={30} />
            <Image unoptimized={true} src={'/static/images/footer/blue.svg'} alt={'Blue'} className="absolute max-lg:hidden right-[-150px] top-[50px] w-[134px] h-[138px]" width={30} height={30} />
            <Image unoptimized={true} src={'/static/images/footer/blue.svg'} alt={'Blue'} className="absolute lg:hidden right-0 top-[70px] w-[79px] h-[81px]" width={30} height={30} />
            <Image unoptimized={true} src={'/static/images/footer/yellow.svg'} alt={'Yellow'} className="absolute lg:hidden left-0 bottom-[-120px] w-[62px] h-[56px]" width={30} height={30} />
            <Image unoptimized={true} src={'/static/images/footer/pink.svg'} alt={'Pink'} className="absolute lg:hidden right-0 bottom-[-150px] w-[62px] h-[56px]" width={30} height={30} />
            {brands.map((item, index) => (
              <div className="flex items-center justify-center w-[35%] max-lg:w-[80%]">
                <Image
                  src={item.logo}
                  alt=""
                  width={20}
                  height={20}
                  className="h-[40px] w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};


