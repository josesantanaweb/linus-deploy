'use client'
import { useRef, useState } from "react";
import Image from "next/image";
import { MainSectionDecorator } from '@/components/layout/BackgroundDecorator'

const MainSection = ({
  className = "",
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className={`relative bottom-0 w-full max-h-[949px] overflow-hidden ${className}`} id={id}>
      {/* <MainSectionDecorator /> */}
      <div
        className="relative bottom-0 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:transform max-w-[1920px] mx-auto mt-20 max-lg:min-h-[518px] max-lg:w-[1046px] lg:flex lg:justify-center z-[100] w-[100%] cursor-pointer overflow-hidden"
      >
        <video
          // ref={videoRef}
          autoPlay
          loop
          muted
          className="w-[100%] max-lg:min:h-[518px] max-lg:w-[1046px] cursor-pointer relative top-[-45px] max-lg:top-[-20px] max-lg:absolute max-lg:bottom-0 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:transform"
          // onClick={handlePlayPause}
        >
          <source
            src="/static/videos/main-video2.mp4"
            type="video/mp4"
          ></source>
        </video>
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {isPlaying ? (
            <></>
          ) : (
            <Image
              className=" lg:w-[92px] lg:h-[92px] w-[62px] h-[62px]"
              src="/static/images/landing/main-section/play-outline.svg"
              width={92}
              height={92}
              alt="Play"
              onClick={handlePlayPause}
            />
          )}
        </div> */}
      </div>
      <div className="absolute bottom-[-4px] left-1/2 rounded-t-[15px] pt-6 pb-14 px-6 bg-shark-950 -translate-x-1/2 flex flex-col justify-center items-center z-[100]">
        <Image
          className="w-[60px] h-[60px] max-lg:w-[30px] max-lg:h-[30px] transform -translate-y-20 animate-bounce"
          src="/static/images/landing/main-section/move-up.svg"
          width={60}
          height={60}
          alt="Up Only"
        />
        <div className="text-[32px] max-lg:text-xl text-white font-normal transform -translate-y-20 animate-bounce">
          Up Only
        </div>
      </div>
    </div>
  );
};

export default MainSection;
