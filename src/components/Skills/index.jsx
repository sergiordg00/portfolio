import { MdWork } from "react-icons/md";

import { ReactComponent as CSS } from "@/assets/icons/css.svg";
import { ReactComponent as Cypress } from "@/assets/icons/cypress.svg";
import { ReactComponent as Figma } from "@/assets/icons/figma.svg";
import { ReactComponent as Git } from "@/assets/icons/git.svg";
import { ReactComponent as Github } from "@/assets/icons/github.svg";
import { ReactComponent as HTML } from "@/assets/icons/html.svg";
import { ReactComponent as JavaScript } from "@/assets/icons/javascript.svg";
import { ReactComponent as Jest } from "@/assets/icons/jest.svg";
import { ReactComponent as Nextjs } from "@/assets/icons/nextjs.svg";
import { ReactComponent as React } from "@/assets/icons/react.svg";
import { ReactComponent as Tailwind } from "@/assets/icons/tailwind.svg";
import { ReactComponent as TypeScript } from "@/assets/icons/typescript.svg";
import Section from "@/components/common/Section";

import TechnologyCard from "./components/TechnologyCard";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Habilidades"
      icon={<MdWork size={28}/>}
    >
      <p className="mt-5 w-full text-base font-medium text-dark" style={{ textWrap: "balance" }}>
        Siempre estoy en búsqueda de nuevas formas de mejorar mis habilidades en el desarrollo frontend. 
        Me mantengo al tanto de las <span className="font-semibold text-primary">últimas tendencias</span> y busco aprender nuevas herramientas para enriquecer mi capacidad técnica. 
      </p>

      <p className="mt-3 w-full text-base font-medium text-dark"  style={{ textWrap: "balance" }}>
        A continuación, puedes encontrar una lista de las <span className="font-semibold text-primary">tecnologías</span> con las que trabajo actualmente:
      </p>

      <div className="mt-5 flex w-full flex-wrap items-center justify-start gap-5">
        <TechnologyCard
          icon={<React className="h-auto w-8 shrink-0" />}
          name="React"
          link="https://es.reactjs.org/"
        />

        <TechnologyCard
          icon={<Nextjs className="h-auto w-8 shrink-0" />}
          name="Nextjs"
          link="https://nextjs.org/"
        />

        <TechnologyCard
          icon={<Tailwind className="h-auto w-8 shrink-0" />}
          name="Tailwind CSS"
          link="https://tailwindcss.com/"
        />
        
        <TechnologyCard
          icon={<Figma className="h-auto w-8 shrink-0" />}
          name="Figma"
          link="https://www.figma.com/"
        />

        <TechnologyCard
          icon={<HTML className="-mr-1 h-auto w-8 shrink-0" />}
          name="HTML"
          link="https://developer.mozilla.org/es/docs/Web/HTML"
        />

        <TechnologyCard
          icon={<CSS className="-mr-1 h-auto w-8 shrink-0" />}
          name="CSS"
          link="https://developer.mozilla.org/es/docs/Web/CSS"
        />

        <TechnologyCard
          icon={<JavaScript className="h-auto w-8 shrink-0" />}
          name="JavaScript"
          link="https://developer.mozilla.org/es/docs/Web/JavaScript"
        />

        <TechnologyCard
          icon={<Git className="h-auto w-8 shrink-0" />}
          name="Git"
          link="https://git-scm.com/"
        />

        <TechnologyCard
          icon={<Github className="h-auto w-8 shrink-0" />}
          name="GitHub"
          link="https://github.com"
        />

        <TechnologyCard
          icon={<React className="h-auto w-8 shrink-0" />}
          name="React Native"
          link="https://reactnative.dev/"
        />

        <TechnologyCard
          icon={<TypeScript className="h-auto w-8 shrink-0" />}
          name="TypeScript"
          link="https://www.typescriptlang.org/"
        />

        <TechnologyCard
          icon={<Jest className="h-auto w-8 shrink-0" />}
          name="Jest"
          link="https://jestjs.io/"
        />

        <TechnologyCard
          icon={<Cypress className="h-auto w-8 shrink-0" />}
          name="Cypress"
          link="https://www.cypress.io/"
        />
      </div>
    </Section>
  );
}
