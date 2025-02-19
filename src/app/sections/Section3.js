'use client';

import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function Section3() {
  // Detectamos cuando la sección está en pantalla
  const [ref, inView] = useInView({
    threshold: 0.2, // Se activa cuando el 20% del componente está en pantalla
    triggerOnce: true, // Solo se activa una vez
  });

  // Animación de fade-in
  const fadeInStyle = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 200, friction: 20 }, // Configuración suave
  });

  return (
    <section
      ref={ref}
      className="text-center bg-[#4a0009] text-[#f189cd] p-4 font-bold cursor-[url('/img/cursor/section3I.png'),_auto]"
    >
      <animated.div
        style={fadeInStyle}
        className="w-full text-xl text-center font-bold font-mona bg-[#4a0009] text-[#f189cd]"
      >
        EXPLORA, EXPERIMENTA Y CREA EN UN ESPACIO SEGURO QUE IMPULSA NUEVAS
        NARRATIVAS
        
      </animated.div>
    </section>
  );
}
