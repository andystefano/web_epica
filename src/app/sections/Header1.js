import Image from "next/image";

import { PiArrowDownThin, PiArrowRightThin  } from "react-icons/pi";

export default function Header() {
  return (
      <header className="bg-[#ff8b41] text-white text-center text-xl font-bold  cursor-[url('/img/cursor/headerI.png'),_auto]">
        <div className="max-w-6xl  mx-auto ">
          <img src="/img/bg_header_desk.png" />
        </div>
      </header>
  );
}
