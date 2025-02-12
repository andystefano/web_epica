import Image from "next/image";

import { PiArrowDownThin, PiArrowRightThin  } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-[#f6d4c2] bg-blue-600 text-white text-center p-4">
    © 2025 - Todos los derechos reservados
    <div className="flex">
<div className="w-1/3">A</div>
<div className="w-1/3">B</div>
<div className="w-1/3">C</div>
</div>
  </footer>
  );
}
