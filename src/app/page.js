import Image from "next/image";

import Header from "./sections/Header1.js";
import Footer from "./sections/Footer.js";
import Section1 from "./sections/Section1.js";
import Section2 from "./sections/Section2.js";
import Section3 from "./sections/Section3.js";
import Section4 from "./sections/Section4.js";
import Section5 from "./sections/Section5.js";

import { PiArrowDownThin, PiArrowRightThin } from "react-icons/pi";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="w-full">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
      <Footer />
    </div>
  );
}
