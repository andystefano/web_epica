import Image from "next/image";

import { PiArrowDownThin, PiArrowRightThin } from "react-icons/pi";
import Faq from "./components/Faq.js";

export default function Section5() {
  return (
    <section className="bg-[#002660] shadow-md  cursor-[url('/img/cursor/section5I.png'),_auto] ">
      <div className="w-full  mx-auto  p-10 sm:flex pt-16 pb-16">
        <div className="w-full sm:w-[50%] sm:flex sm:flex-col items-start justify-start">
          <h2 className="font-medium font-mona mb-4 text-5xl sm:text-6xl text-[#93d3e1]">
            PREGUNTAS
            <br />
            FRECUENTES
          </h2>
        </div>
        <div className="w-full sm:w-[50%]">
          <Faq />
        </div>
      </div>
    </section>
  );
}
