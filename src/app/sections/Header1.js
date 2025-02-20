import Image from "next/image";

import { PiArrowDownThin, PiArrowRightThin  } from "react-icons/pi";

export default function Header() {
  return (
      <header className="bg-[#ff8b41] text-white text-center text-xl font-bold  cursor-[url('/img/cursor/headerI.png'),_auto]">
        <div className="w-full  mx-auto hidden sm:block">
          <img src="/img/web.gif" />
        </div>

        <div className="w-full block sm:hidden">
          <img src="/img/movil.gif" />
        </div>

      </header>
  );
}
