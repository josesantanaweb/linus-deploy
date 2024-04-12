"use client";
import { LogoHeader } from "@/components/Logo";
import useStore from "@/store";
import React, { useEffect, useState } from "react";
import { MenuMobileLanding } from "@/components/MenuMobile";
import { NavbarLanding } from "@/components/layout/Utils/Navbar";
import AccountHandler from "@/components/layout/Utils/Navbar/AccountHandler";
import Button from "@/components/UI/Button";
import { HeaderDecorator } from "@/components/layout/BackgroundDecorator";

// Función para saber el tamaño de la pantalla
function useMediaQuery(query: any) {
  const [matches, setMatches] = useState(true);

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
export const HeaderLanding = ({
  className = "",
}: {
  className?: string;
}) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isConnected = useStore((state) => state.isConnected);
  return (
    <header className="relative flex flex-col mx-auto w-[100%] z-[400] lg:h-[131px]" id="header">
      <HeaderDecorator/>
      <div className="w-[90%] mx-auto mt-5 flex justify-center">
        <div className="w-[calc(100%-20px)] max-w-[1820px] z-[10]">
          <div
            className={`w-[100%] flex items-center z-10 justify-between mb-8`}
          >
            <div className="flex items-center z-10 gap-3">
              <LogoHeader />
              <div className="flex items-center font-black">
                <h1 className="text-white text-3xl max-sm:text-xl">Linus</h1>
              </div>
            </div>
            <NavbarLanding />
            {!isConnected ? (
              <ul className="flex w-auto max-lg:hidden opacity-0 select-none">
                <div>
                  Connect your wallet
                </div>
              </ul>
            ) : (
              <ul className="flex w-auto max-lg:hidden opacity-0 select-none">
                <div>
                  Connect your wallet
                </div>
              </ul>
            )}
            <MenuMobileLanding />
          </div>
        </div>
      </div>
    </header>
  );
};
