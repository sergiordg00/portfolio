import { MdWork } from "react-icons/md";

import Section from "@/components/common/Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Habilidades"
      icon={<MdWork size={28}/>}
    >
      <h2 className="w-full text-center">Transformando ideas en realidad digital.</h2>

    </Section>
  );
}