import Image from "next/image";

import { PiArrowDownThin, PiArrowRightThin } from "react-icons/pi";
import Faq from "./components/Faq.js";

export default function Section5() {
  return (
    <section className="bg-[#002660] shadow-md  cursor-[url('/img/cursor/section5I.png'),_auto] ">
      <div className="max-w-6xl  mx-auto  p-10 flex pt-16 pb-16">
        <div className="w-[50%] flex flex-col items-start justify-start">
          <h2 className="font-medium font-mona mb-4 text-6xl text-[#93d3e1]">
            PREGUNTAS
            <br />
            FRECUENTES
          </h2>
        </div>
        <div className="w-[50%]">
          <Faq />
        </div>
      </div>
    </section>
  );
}
