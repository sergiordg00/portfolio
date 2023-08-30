import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";

import ButtonLink from "@/components/buttons/ButtonLink";
import SocialButton from "@/components/buttons/SocialButton";

import UserImage from "./components/UserImage";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <section className="flex min-h-screen w-full flex-col">
      <Navbar />

      <div className="flex w-full grow items-center justify-center py-10">
        <div className="flex w-full max-w-[1140px] flex-col items-center gap-12 px-5 min-[710px]:flex-row">
          <div className="order-2 flex w-full flex-col items-center gap-y-4 min-[710px]:items-start lg:gap-y-8">
            <h3 className="font-title text-lg tracking-wide text-primary">
              ¡Hola 👋!, me llamo
            </h3>

            <h1 className="font-title text-4xl font-semibold text-light lg:text-6xl">
              Sergio Rodríguez.
            </h1>

            <h2 className="font-title -mt-2 text-4xl font-semibold text-dark lg:-mt-4 lg:text-6xl">
              Frontend Developer
            </h2>

            <p className="w-full text-center text-base font-medium text-dark min-[710px]:text-start" style={{ textWrap: "balance" }}>
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

          <UserImage />
        </div>
      </div>
    </section>
  );
}