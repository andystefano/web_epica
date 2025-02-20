import Image from "next/image";

import { PiArrowDownThin, PiArrowRightThin } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-[#f6d4c2] w-full text-white text-center p-4">
      <div className="flex w-full   mx-auto p-0 sm:p-9">

      <div className="w-full hidden sm:flex justify-between items-center">
  <div className="w-1/3 flex flex-col items-center text-center">
    <div className="w-full flex justify-center">
      <img src="/img/logos/epica_azul.png" className="w-[81%]" />
    </div>
    <div className="w-full text-[#002660] font-mona font-extralight">
      <p className="text-xs text-center mt-4">© 2025, ÉPICA. Todos los derechos reservados Desk.</p>
    </div>
  </div>

  <div className="w-1/3 flex flex-col items-start pl-20 pt-0">
    <div className="flex flex-col justify-between mx-auto">
      <div className="p-4 pt-0">
        <h3 className="text-2xl font-bold font-mona text-left text-[#002660]">
          Contactanos
        </h3>
        <h4 className="text-xl font-extralight text-left text-[#002660]">
          epicaresidencia@antenna.cl
        </h4>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-4">
          <img src="/img/logos/antenna_azul.png" className="w-[7rem]" />
          <img src="/img/logos/mecenas_azul.png" className="w-[3rem]" />
        </div>
      </div>
    </div>
  </div>

  <div className="w-1/3 flex justify-center items-center space-x-4 p-4">
    <FaInstagram size={30} color="#002660" />
    <ImFacebook size={30} color="#002660" />
    <CiLinkedin size={30} color="#002660" />
    <CiLinkedin size={30} color="#002660" />
  </div>
</div>


<div className="block sm:hidden ">
  
  <div className="w-full flex p-4">
        <div className="w-1/2 flex flex-col items-center text-center">
          <div className="w-full flex justify-center">
            <img src="/img/logos/epica_azul.png" className="w-[81%]" />
          </div>
          <div className="w-full  text-[#002660] font-mona font-extraligth">
            <p className="text-[0.45rem] text-center mt-4">© 2025, ÉPICA. Todos los derechos reservados.</p>

        <div className="flex items-center gap-4 pt-8">
          <img src="/img/logos/antenna_azul.png" className="w-[5.5rem]" />
          <img src="/img/logos/mecenas_azul.png" className="w-[2.2rem]" />
        </div>

          </div>
        </div>

        <div className="w-1/2   flex-col  pt-0">
          <div className="flex flex-col justify-between mx-auto">
            <div className=" pt-0">
              <h3 className="text-base font-bold font-mona text-right text-[#002660]">
                Contactanos
              </h3>
              <h4 className="text-xs  font-extraligth text-right text-[#002660]">
                epicaresidencia@antenna.cl
              </h4>

              <div className="w-full flex justify-end items-center space-x-4 p-4">
                <FaInstagram size={20} color="#002660" />
                <ImFacebook size={20} color="#002660" />
                <CiLinkedin size={20} color="#002660" />
                <CiLinkedin size={20} color="#002660" />
              </div>
             

            </div>
            <div className="p-4">
              <div className="flex items-center gap-4">
                
              </div>
            </div>
          </div>
        </div>
  </div>

</div>

      </div>
    </footer>
  );
}
