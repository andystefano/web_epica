import Image from "next/image";

import { PiArrowDownThin, PiArrowRightThin  } from "react-icons/pi";

export default function Section4() {
  return (
     <section className="bg-[#ff8c42] shadow-md   cursor-[url('/img/cursor/headerI.png'),_auto]">
              <div className="max-w-6xl  mx-auto p-8">
                <h2 className="text-6xl font-mona font-black w-full text-center mt-4 text-[#4a0009]">¿Quién puede postular?</h2>
                <p className="text-2xl  font-mona font-normal w-full text-center mt-4 mb-4 mx-auto text-[#4a0009]">
                  Personas pertenecientes a la comunidad LGTBIQA+ (mayores de 24 años),<br/>
    residentes en Chile, con el potencial para ser agentes de cambio en la<br/>
    promoción y posicionamiento del Arte Cuir con énfasis en<br/>
    convergencia de las artes vivas.</p>
              </div>
            </section>
  );
}
