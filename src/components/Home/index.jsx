import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";

import SocialButton from "@/components/buttons/SocialButton";

import ButtonLink from "../buttons/ButtonLink";

import Navbar from "./Navbar";

export default function Home() {
  return (
    <section className="flex min-h-screen w-full flex-col">
      <Navbar />

      <div className="flex w-full grow items-center justify-center py-10">
        <div className="flex w-full max-w-[1140px] items-center gap-x-7 px-5">
          <div className="flex w-full flex-col items-start gap-y-4 lg:gap-y-8">
            <h3 className="font-title text-lg tracking-wide text-primary">
              ¡Hola 👋!, me llamo
            </h3>

            <h1 className="font-title text-4xl font-semibold text-light lg:text-6xl">
              Sergio Rodríguez.
            </h1>

            <h2 className="font-title -mt-2 text-4xl font-semibold text-dark lg:-mt-4 lg:text-6xl">
              Frontend Developer
            </h2>

            <p className="w-full text-base font-medium text-dark" style={{ textWrap: "balance" }}>
              Con más de dos años de experiencia, he tenido la oportunidad de explorar 
              y mejorar mis habilidades en la creación de interfaces de usuario. 
              Mi trayectoria profesional ha estado especialmente guiada por React, 
              donde he invertido más de año y medio perfeccionando mis habilidades 
              con esta potente librería.
            </p>

            <div className="mt-2 flex items-center gap-x-8 sm:gap-x-12 lg:mt-0">
              <ButtonLink 
                icon={<MdOutlineFileDownload size={24} />}
                text="Descargar CV" 
                href="https://google.com" 
              />

              <div className="flex items-center gap-x-5 sm:gap-x-7">
                <SocialButton
                  icon={<FiGithub size={20} />}
                  href="https://google.com"
                  primary
                />

                <SocialButton
                  icon={<FiLinkedin size={20} />}
                  href="https://google.com"
                  primary
                />
              </div>
            </div>
          </div>

          Here we will have an image with shrink-0
          
        </div>
      </div>
    </section>
  );
}