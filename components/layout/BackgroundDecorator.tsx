import Image from "next/image";
import { useState, useEffect } from "react";

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

export const FooterDecorator = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="absolute -z-10 h-[1900px] top-0 left-0 right-0 bottom-0 overflow-hidden">
      <div className="min-w-full min-h-full mx-auto relative">
        <Image
          src={"static/images/footer/main-decorator.svg"}
          width={2210}
          height={1122}
          className="absolute transform top-[0] left-1/2 -translate-x-1/2 z-10 object-center object-cover max-lg:hidden"
          alt="Main Decorator"
        />
        <Image
          src={"static/images/footer/main-decorator-mobile.svg"}
          width={2210}
          height={1154}
          className="absolute w-[2210px] h-[1154px] transform top-[-38%] left-1/2 -translate-x-1/2 z-10 object-center object-cover lg:hidden"
          alt="Main Decorator"
        />
        <Image
          src={"static/images/footer/linus.svg"}
          width={isDesktop ? 631 : 376}
          height={isDesktop ? 726 : 432}
          className="absolute transform max-lg:top-[150px] top-0 left-1/2 -translate-x-1/2 z-[200] object-center object-cover"
          alt="Linus"
        />
        <Image
          src="/static/images/footer/gradient.svg"
          width={859}
          height={589}
          className="absolute top-0 right-0 z-[-1] object-center object-cover min-w-[859px]"
          alt="Gradient"
        />
      </div>
    </div>
  );
};
export const TakeToActionDecorator = () => {
  return (
    <div className="absolute -z-10 h-[1900px] top-[-700px] left-0 right-0 bottom-0 overflow-hidden">
      <div className="min-w-full min-h-full mx-auto relative">
        <Image
          src={"/static/images/landing/take-to-action/gradient-left.svg"}
          width={1098}
          height={754}
          className={`absolute transform top-1/2 left-0 -translate-y-1/2 w-[1098px] z-[-1] max-xl:hidden`}
          alt="Gradient Left"
        />
        <Image
          src={"/static/images/landing/take-to-action/gradient-right.svg"}
          width={1098}
          height={754}
          className={`absolute transform top-1/2 right-0 -translate-y-1/2 w-[1098px] z-[-1] max-xl:hidden`}
          alt="Gradient Right"
        />
        <Image
          src={"/static/images/landing/take-to-action/gradient-mobile.svg"}
          width={578}
          height={397}
          className={`absolute left-0 bottom-10 w-[578px] z-[-20] xl:hidden`}
          alt="Gradient Mobile"
        />
      </div>
    </div>
  );
};
export const LiquidityBurnedGradients = () => {
  return (
    <div className="absolute -z-10 h-[1900px] top-0 left-0 right-0 bottom-0 overflow-hidden">
      <div className="min-w-full min-h-full mx-auto relative">
        <Image
          src={"/static/images/landing/liquidity-burned/gradient3.svg"}
          width={578}
          height={397}
          className={`absolute right-[-100px] top-[150px] w-[578px] h-[397px] z-[-1] xl:hidden`}
          alt="Grid"
        />
      </div>
    </div>
  );
};
export const LiquidityBurnedDecorator = () => {
  return (
    <div className="absolute -z-10 h-[1900px] top-0 left-0 right-0 bottom-0 overflow-hidden">
      <div className="min-w-full min-h-full mx-auto relative">
        <Image
          src={"/static/images/landing/liquidity-burned/grid.svg"}
          width={1586}
          height={608}
          className={`absolute right-[-20%] top-[130px] w-[1586px] h-[550px] z-[-1] opacity-40 max-xl:hidden`}
          alt="Grid"
        />
      </div>
    </div>
  );
};
export const AboutUsDecorator = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="absolute -z-10 h-[1500px] top-0 left-0 right-0 bottom-0 overflow-hidden">
      <div className="min-w-full min-h-full mx-auto relative">
        <Image
          src={"/static/images/landing/about-us/gradient4.svg"}
          width={584}
          height={401}
          className="absolute top-[-60px] left-[0px] z-[-1] w-[584px] xs:hidden"
          alt="Gradient4"
        />
      </div>
    </div>
  );
};
export const MainSectionDecorator = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="absolute z-[-20] h-[1330px] max-lg:h-[500px] top-[-200px] lg:top-[-600px] left-0 right-0 bottom-0 overflow-hidden">
      <div className="min-w-full min-h-full mx-auto relative">
        <Image
          src={"/static/images/landing/main-section/gradient-left.svg"}
          width={isDesktop ? 859 : 314}
          height={isDesktop ? 589 : 215}
          className={`absolute left-0 top-0 w-[859px] max-lg:w-[314px] z-[-1]`}
          alt="Gradient Left"
        />
      </div>
    </div>
  );
};

export const HeaderDecorator = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="absolute z-[-20] h-[1900px] max-lg:h-[300px] left-0 right-0 bottom-0 overflow-hidden">
      <div className="max-w-[1920px] z-[-40] min-w-full min-h-full mx-auto relative">
        <Image
          src="/static/images/landing/main-section/gradient-right.svg"
          width={isDesktop ? 859 : 314}
          height={isDesktop ? 589 : 215}
          className="absolute bottom-0 right-0 z-[-1] object-center object-cover min-w-[859px] max-lg:min-w-[314px]"
          alt="Gradient Right"
        />
      </div>
    </div>
  );
};
