import clsx from "clsx";
import { FiGithub } from "react-icons/fi";

import ButtonLink from "@/components/buttons/ButtonLink";
import SocialButton from "@/components/buttons/SocialButton";

export default function ProjectCard({ image, name, type, description, technologies, href, github, inversed=false }) {
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-lg bg-card md:flex-row">
      <div className={clsx(
        "relative w-full md:w-[55%]",
        inversed ? "md:order-2" : "md:order-1"
      )}>
        <img
          className="h-full w-full bg-gray-500 object-cover object-center"
          src={image}
          alt={name}
        />
        
        <div className={clsx(
          "absolute left-0 top-0 z-[2] h-full w-full bg-gradient-to-t",
          inversed ? "from-card to-transparent md:bg-gradient-to-r" : "from-card to-transparent md:bg-gradient-to-l"
        )}/>
      </div>

      <div className={clsx(
        "flex w-full flex-col items-start p-5 md:w-[45%]",
        inversed ? "md:order-1 md:items-start" : "md:order-2 md:items-end"
      )}>

        <h4 className="font-title text-sm tracking-wide text-primary">
          {type}
        </h4>

        <h3 className="mb-4 mt-1 text-2xl font-bold text-light">
          {name}
        </h3>

        <p className={clsx(
          "mb-6 hidden text-start text-[15px] font-medium text-dark sm:block",
          inversed ? "md:text-start" : "md:text-end"
        )}>
          {description}
        </p>

        <div className={clsx(
          "flex flex-wrap items-center justify-start gap-3",
          inversed ? "md:justify-start" : "md:justify-end"
        )}>
          {technologies.map((technology, index) => (
            <span
              key={index}
              className="rounded-md bg-primary/10 px-2 py-1 text-[13px] font-semibold text-white"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className={clsx(
          "mt-6 flex w-full items-center justify-start gap-x-5",
          inversed ? "md:justify-start" : "md:justify-end"
        )}>
          <ButtonLink 
            text="Ver proyecto" 
            href={href}
          />

          {github && (
            <SocialButton
              icon={<FiGithub size={20} />}
              href={github}
              secondary
            />
          )}
        </div>
      </div>
    </article>
  );
}