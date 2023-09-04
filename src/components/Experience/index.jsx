import { MdCheck, MdPerson } from "react-icons/md";

import Section from "@/components/common/Section";

import Timeline from "./components/Timeline";

function TimelineParagraph({ children }) {
  return (
    <p className="text-[15px] font-medium text-dark">
      {children}
    </p>
  );
}

function TimelineItem({ children }) {
  return (
    <div className="flex w-full items-start gap-x-3">
      <MdCheck className="relative top-[3px] h-4 w-4 shrink-0 text-primary"/>

      <TimelineParagraph>
        {children}
      </TimelineParagraph>
    </div>
  );
}

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Trayectoria"
      icon={<MdPerson size={28}/>}
    >
      <div className="mt-4 flex w-full flex-col items-start gap-8 md:flex-row">
        <div className="w-full max-w-[550px]">
          <h3 className="font-title relative mb-4 text-lg font-semibold text-dark">
            Experiencia

            <div className="absolute bottom-0 left-0 h-[2px] w-10 bg-primary"/>
          </h3>

          <Timeline
            timePeriod="Feb 2022 - Ago 2023"
            location="Suarte"
            title="Lead Frontend Developer"
            isLast
          >
            <div className="flex w-full flex-col gap-y-3">
              <TimelineParagraph>
                Suarte es una plataforma de venta de arte con características sociales 
                en donde tuve la oportunidad de formar parte desde sus inicios.
              </TimelineParagraph>

              <TimelineParagraph>
                Contribuí en la <span className="font-semibold text-primary">creación y desarrollo</span> completo de la plataforma.
                Como lead frontend developer, tuve un impacto integral 
                en varios aspectos clave:
              </TimelineParagraph>

              <TimelineItem>
                Diseñe y desarrollé un <span className="font-semibold text-primary">sistema de caché</span> desde 0
                sobre Redux, una solución que resultó ser crucial
                para reducir drásticamente las solicitudes del
                cliente y mejorar los costes, la eficiencia y
                velocidad de la plataforma.
              </TimelineItem>

              <TimelineItem>
                Solucioné problemas de renderizado que surgieron
                durante el desarrollo empleando técnicas
                de <span className="font-semibold text-primary">virtualización</span>,
                logrando pasar de máximo <span className="font-semibold text-primary">80-100</span> elementos 
                en pantalla a <span className="font-semibold text-primary">+50000</span> sin pérdidas de rendimiento 
                incluso en dispositivos de gama baja.
              </TimelineItem>

              <TimelineItem>
                Elaboré una gran variedad de <span className="font-semibold text-primary">herramientas internas</span> para 
                gestionar tanto el contenido como los procesos internos de la plataforma: gestión de emails, solicitudes de contacto, registro de clientes, revisión de cuadros, etc.
              </TimelineItem>

              <TimelineItem>
                Desempeñé un papel fundamental en la construcción
                de la <span className="font-semibold text-primary">arquitectura</span> inicial del frontend.
              </TimelineItem>

              <TimelineItem>
                Mejoré el DX considerablemente migrando el build de la plataforma a <span className="font-semibold text-primary">Vite</span>,
                reduciendo drásticamente los tiempos de compilado, además de configurar sistemas de <span className="font-semibold text-primary">linting</span> y <span className="font-semibold text-primary">formatting</span> para 
                mantener un código limpio y consistente.
              </TimelineItem>

              <TimelineItem>
                Trabajé en estrecha colaboración con el equipo
                de <span className="font-semibold text-primary">diseño</span> y de <span className="font-semibold text-primary">backend</span> para asegurar una
                integración perfecta de los servicios.
              </TimelineItem>
            </div>
          </Timeline>
        </div>

        <div className="w-full max-w-[550px]">
          <h3 className="font-title relative mb-4 text-lg font-semibold text-dark">
            Educación

            <div className="absolute bottom-0 left-0 h-[2px] w-10 bg-primary"/>
          </h3>

          <Timeline
            timePeriod="2018 - 2022"
            location="Universidad de Alicante"
            title="Grado en Ingeniería Informática"
          >
            <div className="flex w-full flex-col gap-y-3">
              <TimelineParagraph>
                Durante mi licenciatura, exploré una amplia gama de disciplinas, incluyendo programación, 
                bases de datos, redes y más.
              </TimelineParagraph>

              <TimelineParagraph>
                Desde el desarrollo de <span className="font-semibold text-primary">algoritmos</span> hasta el estudio
                de la <span className="font-semibold text-primary">inteligencia artificial</span>, tuve la oportunidad de sumergirme en proyectos desafiantes 
                que ampliaron mi conocimiento y conjunto de habilidades. 
              </TimelineParagraph>

              <TimelineParagraph>
                🥇 Destaco mi participación en el <span className="font-semibold text-primary">concurso internacional</span> de 
                programación de videojuegos llamado CPCRetroDev, donde obtuve el <span className="font-semibold text-primary">cuarto premio</span>.
              </TimelineParagraph>
            </div>
          </Timeline>

          <Timeline
            timePeriod="2016 - 2018"
            location="IES Poeta Paco Mollá"
            title="Bachillerato Tecnológico"
            isLast
          >
            <TimelineParagraph>
              Mi andadura en el mundo de la informática se inició durante mis años de bachillerato. 
              Durante esta etapa, adquirí una <span className="font-semibold text-primary">base sólida</span> en los fundamentos de la informática, 
              abordando aspectos tanto de hardware como de software. 
            </TimelineParagraph>
          </Timeline>
        </div>
      </div>
    </Section>
  );
}