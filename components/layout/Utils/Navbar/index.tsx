import { useState, useEffect } from "react";

import { menuLinksLanding } from "@/data/menuLinks";

import NavbarLinkLanding, { NavbarLinkApp } from "@/components/layout/Utils/NavbarLink";
import Button from "@/components/UI/Button";
import AccountHandler from "@/components/layout/Utils/Navbar/AccountHandler";
import useStore from '@/store'


export const NavbarLanding = ({ isFooter }: { isFooter?: boolean }) => {
  const [activeSection, setActiveSection] = useState('section1');
  const isConnected = useStore((state) => state.isConnected)
  const handleMenuClick = (sectionId:string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const yOffset = -170; // Ajuste fino para centrar verticalmente
      const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['section1', 'section2', 'section3'];
      let visibleSection = '';
  
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            visibleSection = sectionId;
          }
        }
      });
  
      if (visibleSection !== '') {
        setActiveSection(visibleSection);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`${isFooter ? '' : 'max-lg:hidden'} flex items-center lg:justify-between`}>
      <ul className={`${isFooter ? 'flex justify-start items-center gap-4' : 'flex xl:gap-3 lg:gap-[1]'}`}>
        {menuLinksLanding.map((link, i) => (
          <li key={i} className={activeSection === `section${i+1}` ? 'text-picton-blue-400' : ''} onClick={() => handleMenuClick(`section${i+1}`)}>
            <NavbarLinkLanding link={link} isFooter={isFooter}/>
          </li>
        ))}
      </ul>
    </nav>
  );
};