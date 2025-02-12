import Image from "next/image";

import { PiArrowDownThin, PiArrowRightThin  } from "react-icons/pi";

export default function Section1() {
  return (
    <section className="bg-[#004632]">
          <div className="max-w-6xl mx-auto p-8">
            <div>
              <img src="/img/logos/antenna_celeste.png" className="w-[7rem]" />
              <img src="/img/logos/mecenas_celeste.png"  className="w-20"  />
            </div>
            <div className="rounded-lg flex w-full">
              <div className="w-[68%]">
                <h3 className="font-black font-mona mb-4 text-7xl font-bold text-[#93d3e1]">
                  ESPACIO PARA <br />
                  LA INNOVACIÓN <br />Y CREACIÓN <br />
                  ARTÍSTICA
                </h3>
              </div>

              <div className="w-[32%]">
                <p className="mb-4 text-[#93d3e1] text-right font-mona font-extraligth">
                  <strong className="font-bold">Postula a ÉPICA</strong>: Residencia Cuir, una iniciativa impulsada por 
                  <strong className="font-bold"> Fundación Antenna</strong> <br />y <strong className="font-bold">Fundación Mecenas</strong> que celebra la
                  <br />
                  diversidad, la creatividad y el potencial de
                  <br /> artistas de la comunidad LGBTIQ+.
                </p>


                <div><PiArrowDownThin size={80} color="#93d3e1" /></div>
                <a
                  href="#"
                  className="inline-block font-mona text-[#93d3e1] px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-right"
                >
                  CONOCE LAS BASES AQUÍ
                </a>
                <a
                  href="#"
                  className="inline-block font-mona text-[#93d3e1] px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-right"
                >
                  POSTULA
                </a>
              </div>
            </div>
          </div>
        </section>
  );
}
