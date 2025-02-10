import Image from "next/image";

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
              <div className="w-[70%] pr-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-7xl font-bold text-[#93d3e1]">
                  ESPACIO PARA <br />
                  LA INNOVACIÓN <br />Y CREACIÓN <br />
                  ARTÍSTICA
                </h3>
              </div>

              <div className="w-[30%]">
                <p className="mb-4 text-[#93d3e1] text-right">
                  Postula a ÉPICA: Residencia Cuir, una iniciativa impulsada por
                  Fundación Antenna <br />y Fundación Mecenas que celebra la
                  <br />
                  diversidad, la creatividad y el potencial de
                  <br /> artistas de la comunidad LGBTIC+.
                </p>

                <div>Flecha</div>
                <a
                  href="#"
                  className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-right"
                >
                  CONOCE LAS BASES AQUÍ
                </a>
                <a
                  href="#"
                  className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-right"
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
              <div className="text-3xl text-[#00225b] ">
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
                <ul className="text-l text-[#00225b] text-left">
                  <li>
                    <span className="font-bold">Un espacio de trabajo</span> en
                    Balmaceda Arte Joven en Sontiago
                  </li>
                  <li>
                    <span className="font-bold">
                      Mentorías destacados artistas
                    </span>{" "}
                    Corno Hernán Garfios, Alexandra Mabes, Ernesto Orellana y
                    Rodrigo TA.
                  </li>
                  <li>
                    <span className="font-bold">
                      Honorarios y recursos para tu proyecto
                    </span>{" "}
                    asegurando tiempo y energia para la creación
                  </li>
                  <li>
                    <span className="font-bold">Exhibición final</span> ocra
                    presentar tu obra 01 público y 01 circuito artistico.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center bg-[#4a0009] text-[#f189cd] p-4 text-2xl font-bold">
          <div className="w-full text-center bg-[#4a0009] text-[#f189cd] ">
            EXPLORA, EXPERIMENTA Y CREA EN UN ESPACIO SEGURO QUE IMPULSA NUEVAS
            NARRATIVAS
          </div>
        </section>

        <section className="bg-[#ff8c42]  shadow-md p-4">
          <div className="max-w-6xl  mx-auto ">
            <h2 className="text-6xl font-extrabold w-full text-center mt-4 text-[#4a0009]">¿Quién puede postular?</h2>
            <p className="text-2xl font-bold w-full text-center mt-4 mb-4 mx-auto text-[#4a0009]">
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
