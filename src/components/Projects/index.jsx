import { MdCode } from "react-icons/md";

import Section from "@/components/common/Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Proyectos"
      icon={<MdCode size={28}/>}
    >
      <h2 className="w-full text-center">Transformando ideas en realidad digital.</h2>
    </Section>
  );
}