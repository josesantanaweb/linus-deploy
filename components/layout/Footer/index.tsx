"use client";

import Image from "next/image";
import { FooterDecorator } from "@/components/layout/BackgroundDecorator";
import { NavbarLanding } from "@/components/layout/Utils/Navbar";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";
import Document from "../../../public/static/images/footer/document.svg";
import { Poppins } from 'next/font/google';

import useIsMobile from "@/hooks/useIsMobile";
import Button from "@/components/UI/Button";

import TWITTER from '/public/static/images/footer/twitter.svg'
import TELEGRAM from '/public/static/images/footer/telegram.svg'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

import React, { useEffect, useState } from 'react';

// Función para saber el tamaño de la pantalla
function useMediaQuery(query:any) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const listener = (e:any) => {
      setMatches(e.matches);
    };
    
    mediaQuery.addEventListener('change', listener);
    
    return () => {
      mediaQuery.removeEventListener('change', listener);
    };
  }, [query]);
  
  return matches;
}


const OPTIONS = [
  {
    image: TWITTER,
    name: 'twitter',
    link: 'https://twitter.com/LinusOnLinea',
  },
  {
    image: TELEGRAM,
    name: 'telegram',
    link: 'https://t.co/LinusOnLinea',
  },
]
export const FooterLanding = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <footer className="relative flex flex-col w-[100%] mx-auto">
        <FooterDecorator/>
        <div className="mx-auto w-[90%] z-[10] mt-10 max-w-[1820px]">
          <div className="mx-auto w-[100%] flex items-start justify-between z-10">
            <div className="flex items-center justify-start mt-1 gap-8 max-lg:gap-1 max-lg:items-start max-lg:flex-col w-[50%]">
              <div className="text-white font-normal text-xs">
                2024 © LINUS
              </div>
              {/* <div className="cursor-pointer flex items-center gap-1 text-white font-normal text-xs">
                <Image src={Document} alt="Disclaimer" className="w-[24px] h-[24px]"/>
                Legal Disclaimer
              </div> */}
            </div>
            <div className="flex items-start justify-start gap-3 max-lg:gap-1 flex-col ">
              <div className="flex items-center gap-2 w-[100%]">
                <div className="text-white font-normal text-xs whitespace-nowrap">Avaiable on</div>
                <Image src={'/static/images/footer/linea.svg'} width={82} height={14} alt="Blast" className="w-[82px]"/>
              </div>
              <div className="flex items-center justify-end w-[100%] gap-3">
                {OPTIONS.map((option, index) => (
                  <a target="_blank" href={option.link} key={index}>
                    <Button variant="secondary" className="max-lg:">
                      <Image unoptimized={true} src={option.image} alt={option.name} className="w-[16px] h-[16px]" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col justify-start max-lg:items-start max-lg:mx-auto w-fit relative lg:top-[-60px]">
            <div className="text-xs font-bold text-white">Navigation</div> 
            <NavbarLanding isFooter={true}/>
          </div> */}
      </div>
    </footer>
  );
};

