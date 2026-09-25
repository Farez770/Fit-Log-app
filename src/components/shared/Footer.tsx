import Image from "next/image";
import React from "react";
import footerlogo from "@/assets/footerlogo.png";

const Footer = () => {
  return (
    <section className="container mx-auto px-6 mt-16 w-full border-t border-[#26272a] bg-[#0d0e10] text-white ">
      {" "}
      <div className="py-10 flex flex-col gap-2 md:flex-row justify-between items-center">
        <div className="flex flex-row gap-2">
          <Image src={footerlogo} alt="footer logo" />
          <h2 className="font-bold">FITLOG</h2>
        </div>
        <div>
          <p className="text-[#6B7280]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
