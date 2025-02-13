import Image from "next/image";

import { PiArrowDownThin, PiArrowRightThin  } from "react-icons/pi";
import Faq from './components/Faq.js'

export default function Section5() {
  return (
<section className="bg-[#002660] shadow-md  cursor-[url('/img/cursor/section5I.png'),_auto] ">
          <div className="max-w-6xl  mx-auto  p-10 flex">

          <div className="w-[45%]">
          <h2 className="font-black font-mona mb-4 text-5xl font-bold text-[#93d3e1]">PREGUNTAS<br/>FRECUENTES</h2>
          
          </div>
          <div className="w-[55%]">
            <Faq/>
          </div>
            
          </div>
        </section>
  );
}
