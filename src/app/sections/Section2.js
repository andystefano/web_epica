'use client';

import Image from "next/image";
import { PiArrowDownThin, PiArrowRightThin } from "react-icons/pi";
import { useSpring, animated, useTrail } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function Section2() {
  // Detectamos cuando el contenedor entra en la vista
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animación para el bloque de texto de la izquierda
  const leftTextSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { duration: 800 },
  });

  // Datos de la lista de la derecha
  const listItems = [
    {
      id: 1,
      content: (
        <div>
          <span className="font-bold">Un espacio de trabajo</span> en Balmaceda Arte Joven en Santiago
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div>
          <span className="font-bold">Mentorías con destacados artistas</span> como Hernán Garfios, Alexandra Mabes, Ernesto Orellana y Rodrigo TA.
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div>
          <span className="font-bold">Honorarios y recursos para tu proyecto</span> asegurando tiempo y energía para la creación.
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div>
          <span className="font-bold">Exhibición final</span> para presentar tu obra al público y al circuito artístico.
        </div>
      ),
    },
  ];

  // Creamos un trail para los elementos de la lista (efecto secuencial)
  const trail = useTrail(listItems.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { duration: 800 },
    delay: 200,
  });

  return (
    <section className="bg-[#ff92da] cursor-[url('/img/cursor/section2I.png'),_auto]">
      {/* Asignamos el ref al contenedor para detectar la visibilidad */}
      <div className="max-w-6xl mx-auto flex p-8" ref={ref}>
        <div className="w-[50%] p-4">
          <animated.div style={leftTextSpring} className="text-[1.66rem] leading-[2rem] text-[#00225b] font-mona font-extraligth ">
            Con un enfoque interdisciplinario
            <br />
            en <span className="font-bold">Artes Vivas</span>, esta residencia
            <br />
            ofrece a artistas de la comunidad
            <br />
            LGBTIQ+ desde los 24 años:
          </animated.div>
        </div>

        <div className="w-[50%]  p-4 pr-3">
          <div>
            <ul className="text-[1rem] text-[#00225b] text-left space-y-2">
              {trail.map((props, index) => (
                <animated.li
                  key={listItems[index].id}
                  style={props}
                  className="grid grid-cols-[40px_1fr] items-center gap-3"
                >
                  <PiArrowRightThin size={40} color="#00225b" />
                  {listItems[index].content}
                </animated.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
