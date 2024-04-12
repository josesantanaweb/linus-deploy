import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../public/static/images/header/Linus.svg";
import Image from "next/image";
import MenuMobileLink from "@/components/MenuMobile/MenuMobileLink";
import Button from "@/components/UI/Button";
import MenuLine from "@/components/UI/Icons/MenuLine";
import CircleClose from "@/components/UI/Icons/CircleClose";
import GoTo from "@/components/UI/Icons/GoTo";
import Close from "@/components/UI/Icons/Close";
import ChevronUpRight from "@/components/UI/Icons/ChevronUpRight";
import AccountHandler from "@/components/layout/Utils/Navbar/AccountHandler";

import SelectorAccoundHandler from "@/components/layout/Utils/SelectorAccoundHandler";
import SelectorAccoundHandlerSmall from "@/components/layout/Utils/SelectorAccoundHandler/SelectorAccoundHandlerSmall";
import useStore from "@/store";
import ComponentVisible from "@/hooks/useVisible";

import {
  discordLink,
  twitterLink,
  telegramLink,
  mediumLink,
  gitBookLink,
} from "@/data/social";
import { menuLinksLanding, menuLinksApp } from "@/data/menuLinks";

export const MenuMobileLanding = () => {
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);
  const links = useMemo(
    () => menuLinksLanding.filter((link) => link.subLinks),
    []
  );
  const isConnected = useStore((state) => state.isConnected);
  const handleMenuClick = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const yOffset = -170; // Ajuste fino para centrar verticalmente
      const y =
        sectionElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className="lg:hidden flex gap-2.5 z-50" ref={ref}>
      <button
        type="button"
        className={`btn w-[35px] h-[34px] text-[30px] !rounded-[100px] z-10`}
        onClick={() => {
          console.log("hola desde menu");
          setIsVisible(!isVisible);
        }}
      >
        <MenuLine />
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            transition={{ duration: 0.3, ease: "linear" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-[22px] px-1.5 rounded-tl-[10px] rounded-bl-[10px] bg-shark-950 bg-opacity-20 backdrop-blur-[10px] absolute bottom-[50px] right-[5%] w-[416px] max-xs:w-[95%] flex flex-col gap-3 z-[9000]"
          >
            <div className="flex items-center justify-between px-4 z-[9000]">
              <div className="flex items-center gap-3">
                <Image src={Logo} alt="Linus" className="w-[53px] h-[53px]" />
                <div className="text-white font-extrabold text-left text-2xl">
                  Linus
                </div>
              </div>
              <button
                className="btn !p-0 text-lg"
                aria-label="Close menu"
                title="Close menu"
                onClick={() => setIsVisible(false)}
              >
                <CircleClose />
              </button>
            </div>
            {menuLinksLanding.map((link, i) => (
              <span key={i} onClick={() => handleMenuClick(`section${i + 1}`)}>
                <MenuMobileLink link={link} />
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const MenuMobileApp = () => {
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  return (
    <div className="lg:hidden flex gap-2.5" ref={ref}>
      <SelectorAccoundHandlerSmall />

      <button
        type="button"
        aria-label={isVisible ? "Close menu" : "Open menu"}
        className={`btn w-[35px] h-[34px] text-[19px] !rounded-[100px] bg-navy-blue-900 ${
          isVisible ? "bg-opacity-100 text-white" : "bg-opacity-0"
        }`}
        onClick={() => setIsVisible(!isVisible)}
      >
        <MenuLine />
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            transition={{ duration: 0.5, ease: [0.21, 1.25, 0.64, 1] }}
            initial={{ right: -328 }}
            animate={{ right: 0 }}
            exit={{ right: -328 }}
            className="absolute top-0 w-[330px] h-screen bg-white bg-opacity-5 backdrop-blur-[20px] py-20 px-5 z-50"
          >
            <button
              type="button"
              aria-label="Close menu"
              title="Close menu"
              className="flex items-center right-5 absolute gap-[5px]"
              onClick={() => setIsVisible(false)}
            >
              <span className="text-xs leading-normal">Close</span>
              <span className="text-[20px] leading-normal">
                <Close />
              </span>
            </button>

            <div className="pt-10">
              <SelectorAccoundHandler className="mb-2" />

              <a
                href="#"
                className="btn h-[38px] bg-navy-blue-900 hover:bg-oxford-blue-800 !rounded-10 mb-5 text-white gap-[5px]"
              >
                <span className="text-xs leading-normal">Account manager</span>
                <span className="text-sm">
                  <ChevronUpRight />
                </span>
              </a>

              <div>
                {menuLinksApp.map((link, i) => (
                  <a
                    href={link.href}
                    key={i}
                    className="text-sm leading-[14px] flex gap-[5px] px-5 py-3 mb-2 last:mb-0 hover:bg-shark-950 hover:text-white rounded-[100px] hover:shadow-[0px_10px_15px_0px_rgba(71,_103,_135,_0.20)] !transition-[background,color,box-shadow]"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
