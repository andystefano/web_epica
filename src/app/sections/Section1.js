import Image from "next/image";

import { PiArrowDownThin, PiArrowRightThin } from "react-icons/pi";

export default function Section1() {
  return (
    <section className="bg-[#004632] cursor-[url('/img/cursor/section1I.png'),_auto]">
      <div className="max-w-6xl mx-auto p-6 pb-9">
        <div className="flex items-center gap-8" style={{
    marginTop: "1.91%",
    marginLeft: "1.7%"
  }}>
          <div><img src="/img/logos/antenna_celeste.png" className="w-[7rem]" /></div>
          <div><img src="/img/logos/mecenas_celeste.png" className="w-[3.5rem]" /></div>
        </div>
        <div className="rounded-lg flex w-full mt-10">
          <div className="w-[68%]">
          <img src="/img/textos/web.png" className="w-[90%]"  style={{ marginTop: "12%" }}></img>
          </div>

          <div className="w-[32%]" style={{ marginTop:"12%"}}>
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="mb-4 text-[#93d3e1] text-[1.053rem] leading-[1.2rem] text-right font-mona font-extralight">
                  <strong className="font-medium tracking-tight">Postula a ÉPICA</strong>:
                  Residencia Cuir, una iniciativa impulsada por
                  <strong className="font-bold"> Fundación Antenna</strong>{" "}
                  <br />y{" "}
                  <strong className="font-bold">Fundación Mecenas</strong> que
                  celebra la
                  <br />
                  diversidad, la creatividad y el potencial de
                  <br /> artistas de la comunidad LGBTIQ+.
                </p>
              </div>
              <div className="flex flex-col items-end w-full">
                <div>
                  <PiArrowDownThin size={43} color="#93d3e1" />
                </div>
                <a href="#" className="font-mona text-[#93d3e1] text-rigth ">
                  CONOCE LAS BASES AQUÍ
                </a>
                <a
                  href="#"
                  className="font-mona text-[#93d3e1] text-rigth  underline underline-offset-4 mb-12"
                >
                  POSTULA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
