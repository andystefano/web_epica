import Image from "next/image";

import { PiArrowDownThin, PiArrowRightThin  } from "react-icons/pi";

export default function Home() {
  return (
    <div>
      <header className="bg-[#ff8b41] text-white p-4 text-center text-xl font-bold">
        <div className="max-w-6xl  mx-auto ">
          <img src="/img/bg_header_desk.png" />
        </div>
      </header>

      <main className="w-full">
        <section className="bg-[#004632]  shadow-md p-4">
          <div className="max-w-6xl  mx-auto ">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">antenna</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              fundación
            </h2>
            <div className="p-6 rounded-lg shadow-lg flex w-full">
              <div className="w-[68%] pr-4">
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

        <section className="bg-[#ff92da]  shadow-md p-4">
          <div className="max-w-6xl  mx-auto flex ">
            <div className="w-[50%]">
              <div className="text-3xl text-[#00225b]  font-mona font-extraligth">
                Con un enfoque interdisciplinario
                <br />
                en <span className="font-bold">Artes Vivas</span>, esta
                residencia
                <br />
                ofrece a artistas de la comunidad
                <br />
                LGBTIQ+ desde los 24 años:
              </div>
            </div>

            <div className="w-[50%]">
              <div>
              <ul className="text-lg text-[#00225b] text-left">
  <li className="flex items-center gap-4">
    <PiArrowRightThin size={40} color="#00225b" />
    <div>
      <span className="font-bold">Un espacio de trabajo</span> en Balmaceda Arte Joven en Santiago
    </div>
  </li>

  <li className="flex items-center gap-4">
    <PiArrowRightThin size={40} color="#00225b" />
    <div>
      <span className="font-bold">Mentorías con destacados artistas</span> como Hernán Garfios, Alexandra Mabes, Ernesto Orellana y Rodrigo TA.
    </div>
  </li>

  <li className="flex items-center gap-4">
    <PiArrowRightThin size={40} color="#00225b" />
    <div>
      <span className="font-bold">Honorarios y recursos para tu proyecto</span> asegurando tiempo y energía para la creación.
    </div>
  </li>

  <li className="flex items-center gap-4">
    <PiArrowRightThin size={40} color="#00225b" />
    <div>
      <span className="font-bold">Exhibición final</span> para presentar tu obra al público y al circuito artístico.
    </div>
  </li>
</ul>

              </div>
            </div>
          </div>
        </section>

        <section className="text-center bg-[#4a0009] text-[#f189cd] p-4 font-bold">
          <div className="w-full text-xl text-center font-bold font-mona bg-[#4a0009] text-[#f189cd] ">
            EXPLORA, EXPERIMENTA Y CREA EN UN ESPACIO SEGURO QUE IMPULSA NUEVAS
            NARRATIVAS
          </div>
        </section>

        <section className="bg-[#ff8c42]  shadow-md p-4">
          <div className="max-w-6xl  mx-auto ">
            <h2 className="text-6xl font-mona font-black w-full text-center mt-4 text-[#4a0009]">¿Quién puede postular?</h2>
            <p className="text-2xl  font-mona font-normal w-full text-center mt-4 mb-4 mx-auto text-[#4a0009]">
              Personas pertenecientes a la comunidad LGTBIQA+ (mayores de 24 años),<br/>
residentes en Chile, con el potencial para ser agentes de cambio en la<br/>
promoción y posicionamiento del Arte Cuir con énfasis en<br/>
convergencia de las artes vivas.</p>
          </div>
        </section>

        <section className="bg-[#002660]  shadow-md p-4">
          <div className="max-w-6xl  mx-auto ">
            <h2 className="text-2xl font-semibold">Sección 1</h2>
            <p>Contenido de la primera sección.</p>
          </div>
        </section>
      </main>

      <footer className="bg-[#f6d4c2] bg-blue-600 text-white text-center p-4">
        © 2025 - Todos los derechos reservados
        <div className="flex">
<div className="w-1/3">A</div>
<div className="w-1/3">B</div>
<div className="w-1/3">C</div>
</div>
      </footer>
    </div>
  );
}
