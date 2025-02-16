import Image from "next/image";

import { PiArrowDownThin, PiArrowRightThin } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-[#f6d4c2] text-white text-center p-4">
      <div className="flex max-w-6xl  mx-auto  p-9">
        <div className="w-1/3 flex flex-col items-center text-center">
          <div className="w-full flex justify-center">
            <img src="/img/logos/epica_azul.png" className="w-[81%]" />
          </div>
          <div className="w-full text-[#002660] font-mona font-extraligth">
            <p className="text-xs text-center mt-4">© 2025, ÉPICA. Todos los derechos reservados.</p>
          </div>
        </div>

        <div className="w-1/3 pl-20 pt-0">
          <div className="flex flex-col justify-between mx-auto">
            <div className="p-4 pt-0">
              <h3 className="text-2xl font-bold font-mona text-left text-[#002660]">
                Contactanos
              </h3>
              <h4 className="text-xl  font-extraligth text-left text-[#002660]">
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
        <div className="w-1/3  pl-20 pt-0">
          <div className="flex items-center space-x-4 p-4">
            <FaInstagram size={30} color="#002660" />
            <ImFacebook size={30} color="#002660" />
            <CiLinkedin size={30} color="#002660" />
            <CiLinkedin size={30} color="#002660" />
          </div>
        </div>
      </div>
    </footer>
  );
}
