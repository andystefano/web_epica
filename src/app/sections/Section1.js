import Image from "next/image";

import { PiArrowDownThin, PiArrowRightThin } from "react-icons/pi";

export default function Section1() {
  return (
    <section className="bg-[#004632] cursor-[url('/img/cursor/section1I.png'),_auto]">
      <div className="w-full mx-auto p-6 pb-9">
        <div className="flex items-center gap-8" style={{
    marginTop: "1.91%",
    marginLeft: "1.7%"
  }}>
          <div><img src="/img/logos/antenna_celeste.png" className="w-[7rem]" /></div>
          <div><img src="/img/logos/mecenas_celeste.png" className="w-[3.5rem]" /></div>
        </div>
        <div className="rounded-lg block sm:flex w-full mt-10">
          <div className="w-full sm:w-[68%]">
          <img src="/img/textos/web.png" className="w-[90%] hidden sm:block"  style={{ marginTop: "12%" }}/>
          <img src="/img/textos/movil.png" className="w-[100%] block sm:hidden"  style={{ marginTop: "12%" }}/>
          </div>

          <div className="w-full sm:w-[32%]" style={{ marginTop:"12%"}}>
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="hidden sm:block mb-4 text-[#93d3e1] text-[1.3rem] leading-[1.55rem] text-left sm:text-right font-mona font-extralight">
                  Postula a <strong className="font-medium tracking-tight">ÉPICA:
                  Residencia Cuir</strong>,<br/> una iniciativa impulsada por
                  <strong className="font-bold"> Fundación Antenna</strong>{" "}
                  <br/>y&nbsp;
                  <strong className="font-bold">Fundación Mecenas</strong> que
                  celebra la
                  
                  diversidad,<br/>la creatividad y el potencial de
                  artistas cuir. 
                </p>

                <p className="block sm:hidden mb-4 text-[#93d3e1] text-[1.053rem] leading-[1.2rem] text-left sm:text-right font-mona font-extralight">
                 Postula a <strong className="font-medium tracking-tight">ÉPICA:
                  Residencia Cuir</strong>, una iniciativa impulsada por
                  <strong className="font-bold"> Fundación Antenna</strong> y
                  <strong className="font-bold">Fundación Mecenas</strong> que
                  celebra la
                  
                  diversidad, la creatividad y el potencial de
                   artistas cuir. 
                </p>

              </div>
              <div className="flex flex-col items-center sm:items-end w-full sm:mt-0 mt-6">
                <div>
                  <PiArrowDownThin size={55} color="#93d3e1" />
                </div>
                <a href="#" className="mt-4 sm:mt-0 font-mona text-[#93d3e1] text-rigth  text-xl hover:text-[#ff92da]">
                  CONOCE LAS BASES AQUÍ
                </a>
                <a
                  href="#"
                  className="mt-4 sm:mt-0 font-mona text-[#93d3e1] text-rigth  underline underline-offset-4 mb-12 text-xl  hover:text-[#ff92da]"
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
