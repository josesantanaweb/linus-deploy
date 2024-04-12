'use client'
import "@/styles/globals.css";
import { HeaderLanding } from "@/components/layout/Header";
import { FooterLanding } from "@/components/layout/Footer";
import { DM_Sans } from 'next/font/google'
import { useEffect, useState } from 'react';


const DMSans = DM_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrollFinish, setScrollFinish] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const header = document.getElementById('header');
    if (header) {
      header.scrollIntoView();
      setScrollFinish(true);
    }
    setIsLoaded(true);
  }, []);

  return (
    <html lang="en" className="antialiased">
      <body suppressHydrationWarning={true} className={`${DMSans.className}`}>
        <div className={`${isLoaded? '' : 'opacity-0'}`}>
          <FooterLanding />
          <div className={`pt-[119px] max-sm:pt-[30px] ${isLoaded ? '': 'pb-[254px]'}`}>{children}</div>
        </div>
        <HeaderLanding className={`${isLoaded ? '': 'fixed bottom-0 left-0 right-0'}`}/>
      </body>
    </html>
  );
}
