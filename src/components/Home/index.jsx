import { motion } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";

import ButtonLink from "@/components/buttons/ButtonLink";
import SocialButton from "@/components/buttons/SocialButton";
import useScreenSize from "@/hooks/useScreenSize";

import UserImage from "./components/UserImage";

export default function Home() {
  const screenSize = useScreenSize();
  const initialDelay = useRef(screenSize.width < 710 ? 0.5 : 0.3);

  return (
    <section className="flex min-h-screen w-full items-center justify-center pt-20">
      <div className="flex w-full flex-col items-center gap-12 py-10 min-[710px]:flex-row">
        <div className="order-2 flex w-full flex-col items-center gap-y-4 min-[710px]:items-start lg:gap-y-8">
          <motion.h3 
            className="font-title text-lg tracking-wide text-primary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: initialDelay.current+0.1, duration: 0.5 }}
          >
            ¡Hola 👋!, me llamo
          </motion.h3>

          <motion.h1 
            className="font-title text-4xl font-semibold text-light lg:text-6xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: initialDelay.current+0.2, duration: 0.5 }}
          >
            Sergio Rodríguez.
          </motion.h1>

          <motion.h2 
            className="font-title -mt-2 text-4xl font-semibold text-dark lg:-mt-4 lg:text-6xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: initialDelay.current+0.2, duration: 0.5 }}
          >
            Frontend Developer
          </motion.h2>

          <motion.p 
            className="w-full text-center text-base font-medium text-dark min-[710px]:text-start" 
            style={{ textWrap: "balance" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: initialDelay.current+0.3, duration: 0.5 }}
          >
            Con más de 
              
            <span className="font-semibold text-primary">
              {" "}dos años{" "}
            </span>

            de experiencia, he tenido la oportunidad de explorar 
            y mejorar mis habilidades en la creación de interfaces de usuario. 
            Mi trayectoria profesional ha estado especialmente guiada por

            <span className="font-semibold text-primary">
              {" "}React
            </span>

            , donde he invertido más de año y medio perfeccionando mis habilidades 
            con esta potente librería.
          </motion.p>

          <motion.div 
            className="mt-2 flex items-center gap-x-8 sm:gap-x-12 lg:mt-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: initialDelay.current+0.4, duration: 0.5 }}
          >
            <ButtonLink 
              icon={<MdOutlineFileDownload size={24} />}
              text="Descargar CV" 
              href="https://sergiordg.com/cv_es.pdf"
            />

            <div className="flex items-center gap-x-5 sm:gap-x-7">
              <SocialButton
                icon={<FiGithub size={20} />}
                href="https://github.com/sergiordg00"
                primary
              />

              <SocialButton
                icon={<FiLinkedin size={20} />}
                href="https://www.linkedin.com/in/sergiordg00/"
                primary
              />
            </div>
          </motion.div>
        </div>

        <UserImage />
      </div>
    </section>
  );
}