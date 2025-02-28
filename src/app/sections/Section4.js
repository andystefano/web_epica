"use client";

import Image from "next/image";

import { PiArrowDownThin, PiArrowRightThin  } from "react-icons/pi";
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function Section4() {
  // Hook para detectar cuando el contenedor entra en la vista
  const [ref, inView] = useInView({
    triggerOnce: true, // solo se dispara una vez
    threshold: 0.1,    // porcentaje de visibilidad para activar la animación
  });

  // Animación para el título
  const titleSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 800 },
  });

  // Animación para el párrafo (con un ligero retraso)
  const pSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    delay: 200,
    config: { duration: 1000 },
  });

  return (
    <section className="bg-[#ff8c42] shadow-md cursor-[url('/img/cursor/headerI.png'),_auto] py-16">
      {/* Asignamos el ref al contenedor para detectar su visibilidad */}
      <div className="w-full mx-auto p-8 pt-4 pb-1" ref={ref}>
        <animated.h2 style={titleSpring} className="text-5xl sm:text-6xl font-mona font-black w-full text-center text-[#4a0009]">
          ¿Quién puede postular?
        </animated.h2>
        <animated.p style={pSpring} className="hidden sm:block text-3xl font-mona font-normal w-full text-center mt-8 mx-auto text-[#4a0009]">
          Personas pertenecientes a la comunidad LGTBIQA+ (mayores de 24 años),<br />
          residentes en Chile, con el potencial para ser agentes de cambio en la<br />
          promoción y posicionamiento del Arte Cuir con énfasis en<br />
          convergencia de las artes vivas.
        </animated.p>

        <animated.p style={pSpring} className="block sm:hidden text-2xl font-mona font-normal w-full text-center mt-8 mx-auto text-[#4a0009]">
          Personas pertenecientes a la comunidad LGTBIQA+ (mayores de 24 años),
          residentes en Chile, con el potencial para ser agentes de cambio en la
          promoción y posicionamiento del Arte Cuir con énfasis en
          convergencia de las artes vivas.
        </animated.p>
      </div>
    </section>
  );
}
