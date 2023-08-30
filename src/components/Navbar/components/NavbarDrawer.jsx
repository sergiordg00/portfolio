import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdCode, MdHome, MdOutlineFileDownload, MdPerson, MdWork } from "react-icons/md";

import ButtonLink from '@/components/buttons/ButtonLink';
import SocialButton from "@/components/buttons/SocialButton";
import Drawer from "@/components/modals/Drawer";

import NavItem from "./NavItem";

export default function NavbarDrawer({ isDrawerOpen, setIsDrawerOpen }) {
  return (
    <Drawer
      isOpen={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      className="flex w-full max-w-[400px] flex-col items-center gap-y-8 bg-card px-4 pb-10 pt-16"
    >
      <ul className="flex w-fit flex-col items-start gap-y-7">
        <NavItem 
          icon={<MdHome size={20} />}
          text="Home"
          href="#" 
          onClick={() => setIsDrawerOpen(false)} 
        />

        <NavItem 
          icon={<MdPerson size={20} />}
          text="Trayectoria"
          href="#experience" 
          onClick={() => setIsDrawerOpen(false)} 
        />

        <NavItem 
          icon={<MdCode size={20} />}
          text="Proyectos"
          href="#projects" 
          onClick={() => setIsDrawerOpen(false)} 
        />

        <NavItem 
          icon={<MdWork size={20} />}
          text="Habilidades"
          href="#skills" 
          onClick={() => setIsDrawerOpen(false)} 
        />
      </ul>

      <ButtonLink 
        icon={<MdOutlineFileDownload size={24} />}
        text="Descargar CV" 
        href="https://google.com" 
      />

      <div className="flex items-center gap-x-5">
        <SocialButton
          icon={<FiGithub size={20} />}
          href="https://github.com/sergiordg00"
          secondary
        />

        <SocialButton
          icon={<FiLinkedin size={20} />}
          href="https://google.com"
          secondary
        />
      </div>
    </Drawer>
  );
}