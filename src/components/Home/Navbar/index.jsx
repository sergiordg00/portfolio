import Hamburger from 'hamburger-react';
import { useState } from "react";

import logo from "@/assets/img/logo.png";
import useScreenSize from "@/hooks/useScreenSize";

import NavbarDrawer from './components/NavbarDrawer';
import NavItem from "./components/NavItem";

import "./index.css";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const screenSize = useScreenSize();

  return (
    <nav className="navbar-shadow sticky top-0 z-[2] w-full shrink-0 bg-background py-4">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-5">
        <a href="#" className="shrink-0 transition hover:opacity-50">
          <img 
            src={logo} 
            alt="Sergio's Logo" 
            className="w-[50px]" 
          />
        </a>

        {
          screenSize.width <= 600 ? 
            <>
              <Hamburger
                toggled={isDrawerOpen}
                toggle={setIsDrawerOpen}
                size={24}
                color="#64ffda"
                duration={0.5}
              />

              <NavbarDrawer
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
              />
            </>
            :
            <ul className="flex items-center gap-x-7">
              <NavItem 
                text="Home"
                href="#" 
                onClick={() => setIsDrawerOpen(false)} 
              />

              <NavItem 
                text="Experiencia"
                href="#experience" 
                onClick={() => setIsDrawerOpen(false)} 
              />

              <NavItem 
                text="Proyectos"
                href="#projects" 
                onClick={() => setIsDrawerOpen(false)} 
              />

              <NavItem 
                text="Habilidades"
                href="#skills" 
                onClick={() => setIsDrawerOpen(false)} 
              />
            </ul>
        }
      </div>
    </nav>
  );
}