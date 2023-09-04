import { MdCode } from "react-icons/md";

import bytetalk from "@/assets/img/bytetalk.jpg";
import justablog from "@/assets/img/justablog.jpg";
import reactsounds from "@/assets/img/reactsounds.jpg";
import suarte from "@/assets/img/suarte.jpg";
import Section from "@/components/common/Section";

import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Proyectos"
      icon={<MdCode size={28}/>}
    >
      <h4 className="font-title mb-5 mt-2 w-full text-center text-[15px] italic text-dark">
        Transformando ideas en realidad digital.
      </h4>

      <div className="flex w-full flex-col gap-y-5 md:gap-y-10">
        <ProjectCard
          image={reactsounds}
          type="Music Application"
          name="ReactSounds"
          description={`
            Explora y disfruta de tu música favorita con ReactSounds. 
            Esta aplicación te permite buscar artistas, playlists y canciones, 
            además de guardar tus preferidas. Experimenta la música de una 
            manera totalmente nueva con una interfaz moderna y amigable.
          `}
          technologies={["React", "Vite", "Tailwind CSS", "Deezer API", "Vercel"]}
          href="https://reactsounds.sergiordg.com/"
          github="https://github.com/sergiordg00/reactsounds"
        />

        <ProjectCard
          image={bytetalk}
          type="Chat Application"
          name="ByteTalk"
          description={`
            Una plataforma de chat completa que abarca chats individuales y grupales. 
            Sus características incluyen replies intuitivos, notificaciones en tiempo real 
            y un sistema de sonido. Además, cuenta con una inteligencia artificial 
            integrada que sugiere respuestas para agilizar las conversaciones.
          `}
          technologies={["Nextjs", "Next-auth", "Prisma", "OpenAI", "Tailwind CSS", "Cloudinary", "Pusher"]}
          href="https://bytetalk.sergiordg.com/"
          github="https://github.com/sergiordg00/bytetalk"
          inversed
        />

        <ProjectCard
          image={justablog}
          type="Blog Project"
          name="Just a blog"
          description={`
            Una aplicación tipo blog totalmente funcional donde podrás explorar artículos 
            en diversas categorías, buscar contenido específico y poder interactuar 
            dejando comentarios y compartiendo tus ideas dentro de cada artículo.
          `}
          technologies={["Nextjs", "Sanity", "Tailwind CSS", "Vercel"]}
          href="https://blog.sergiordg.com/"
          github="https://github.com/sergiordg00/just-a-blog"
        />

        <ProjectCard
          image={suarte}
          type="Art Platform"
          name="Suarte"
          description={`
            Plataforma de venta de arte con características sociales. Es una comunidad en 
            línea que une a amantes del arte, artistas, galerías y coleccionistas. Descubre 
            todo tipo de arte empleando tanto los potentes filtros de búsqueda como el algoritmo 
            de recomendación. Con la posibilidad de crear un perfil, puedes comprar arte que 
            refleje tu estilo y agregarlo a tu colección personal.
          `}
          technologies={["React", "Firebase", "Cloudflare", "PWA", "MongoDB", "Framer Motion"]}
          href="https://suarte.art/"
          inversed
        />
      </div>
    </Section>
  );
}