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

// import SelectorAccoundHandler from "@/components/layout/Utils/SelectorAccoundHandler";
// import SelectorAccoundHandlerSmall from "@/components/layout/Utils/SelectorAccoundHandler/SelectorAccoundHandlerSmall";
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

