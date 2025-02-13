import Image from "next/image";

import { PiArrowDownThin, PiArrowRightThin } from "react-icons/pi";

export default function Section2() {
  return (
    <section className="bg-[#ff92da]  cursor-[url('/img/cursor/section2I.png'),_auto]">
      <div className="max-w-6xl  mx-auto flex p-8 ">
        <div className="w-[50%]">
          <div className="text-3xl text-[#00225b]  font-mona font-extraligth">
            Con un enfoque interdisciplinario
            <br />
            en <span className="font-bold">Artes Vivas</span>, esta residencia
            <br />
            ofrece a artistas de la comunidad
            <br />
            LGBTIQ+ desde los 24 años:
          </div>
        </div>

        <div className="w-[50%]">
          <div>
            <ul className="text-lg text-[#00225b] text-left space-y-4">
              <li className="grid grid-cols-[40px_1fr] items-center gap-4">
                <PiArrowRightThin size={40} color="#00225b" />
                <div>
                  <span className="font-bold">Un espacio de trabajo</span> en
                  Balmaceda Arte Joven en Santiago
                </div>
              </li>

              <li className="grid grid-cols-[40px_1fr] items-center gap-4">
                <PiArrowRightThin size={40} color="#00225b" />
                <div>
                  <span className="font-bold">
                    Mentorías con destacados artistas
                  </span>{" "}
                  como Hernán Garfios, Alexandra Mabes, Ernesto Orellana y
                  Rodrigo TA.
                </div>
              </li>

              <li className="grid grid-cols-[40px_1fr] items-center gap-4">
                <PiArrowRightThin size={40} color="#00225b" />
                <div>
                  <span className="font-bold">
                    Honorarios y recursos para tu proyecto
                  </span>{" "}
                  asegurando tiempo y energía para la creación.
                </div>
              </li>

              <li className="grid grid-cols-[40px_1fr] items-center gap-4">
                <PiArrowRightThin size={40} color="#00225b" />
                <div>
                  <span className="font-bold">Exhibición final</span> para
                  presentar tu obra al público y al circuito artístico.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
