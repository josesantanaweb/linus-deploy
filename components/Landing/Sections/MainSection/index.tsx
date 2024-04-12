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
    <div className={`relative lg:pb-[120px] w-full ${className}`} id={id}>
      <MainSectionDecorator />
      <div
        className="relative mx-auto mt-10 flex justify-center z-[300] w-[80%] lg:h-[800px] max-lg:w-[95%] bg-shark-950  p-4
       max-lg:p-2 rounded-[60px] border-8 backdrop-blur-[74px] border-picton-blue-400 max-w-[1870px] cursor-pointer "
      >
        <video
          ref={videoRef}
          className="w-[100%] max-lg:min-h-[500px] rounded-3xl cursor-pointer"
          onClick={handlePlayPause}
        >
          <source
            src="/static/videos/landing-teaser.mp4"
            type="video/mp4"
          ></source>
        </video>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
        </div>
        <div className="absolute bottom-10 max-lg:bottom-5 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center">
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
    </div>
  );
};

export default MainSection;
