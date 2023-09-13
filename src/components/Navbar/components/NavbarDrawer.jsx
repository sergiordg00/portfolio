import { motion } from "framer-motion";
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
          delay={0}
          isDrawer
        />

        <NavItem 
          icon={<MdPerson size={20} />}
          text="Trayectoria"
          href="#experience" 
          onClick={() => setIsDrawerOpen(false)} 
          delay={0.1}
          isDrawer
        />

        <NavItem 
          icon={<MdCode size={20} />}
          text="Proyectos"
          href="#projects" 
          onClick={() => setIsDrawerOpen(false)} 
          delay={0.2}
          isDrawer
        />

        <NavItem 
          icon={<MdWork size={20} />}
          text="Habilidades"
          href="#skills" 
          onClick={() => setIsDrawerOpen(false)} 
          delay={0.3}
          isDrawer
        />
      </ul>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <ButtonLink 
          icon={<MdOutlineFileDownload size={24} />}
          text="Descargar CV" 
          href="https://sergiordg.com/cv_es.pdf" 
        />
      </motion.div>

      <div className="flex items-center gap-x-5">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <SocialButton
            icon={<FiGithub size={20} />}
            href="https://github.com/sergiordg00"
            secondary
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <SocialButton
            icon={<FiLinkedin size={20} />}
            href="https://www.linkedin.com/in/sergiordg00/"
            secondary
          />
        </motion.div>
      </div>
    </Drawer>
  );
}