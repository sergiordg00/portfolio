import { motion } from 'framer-motion';
import Hamburger from 'hamburger-react';
import { useState } from "react";
import { MdCode, MdHome, MdPerson, MdWork } from "react-icons/md";

import logo from "@/assets/img/logo.png";
import useScreenSize from "@/hooks/useScreenSize";

import NavbarDrawer from './components/NavbarDrawer';
import NavItem from "./components/NavItem";

import "./index.css";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const screenSize = useScreenSize();

  return (
    <nav className="navbar-shadow fixed top-0 z-[3] w-full shrink-0 bg-background py-4">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-5">
        <motion.a 
          href="#" 
          className="shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ opacity: 0.5 }}
        >
          <img 
            src={logo} 
            alt="Sergio's Logo" 
            className="w-[50px]" 
          />
        </motion.a>

        {
          screenSize.width <= 600 ? 
            <>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <Hamburger
                  toggled={isDrawerOpen}
                  toggle={setIsDrawerOpen}
                  size={24}
                  color="#64ffda"
                  duration={0.5}
                />
              </motion.div>

              <NavbarDrawer
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
              />
            </>
            :
            <ul className="flex items-center gap-x-7">
              <NavItem 
                icon={<MdHome size={20} />}
                text="Home"
                href="#" 
                onClick={() => setIsDrawerOpen(false)}
                delay={0.1} 
              />

              <NavItem 
                icon={<MdPerson size={20} />}
                text="Trayectoria"
                href="#experience" 
                onClick={() => setIsDrawerOpen(false)} 
                delay={0.2}
              />

              <NavItem 
                icon={<MdCode size={20} />}
                text="Proyectos"
                href="#projects" 
                onClick={() => setIsDrawerOpen(false)} 
                delay={0.3}
              />

              <NavItem 
                icon={<MdWork size={20} />}
                text="Habilidades"
                href="#skills" 
                onClick={() => setIsDrawerOpen(false)} 
                delay={0.4}
              />
            </ul>
        }
      </div>
    </nav>
  );
}