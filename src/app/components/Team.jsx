import React from "react";
import Image from "next/image";
import { PiHandbagSimpleLight } from "react-icons/pi";
import logo1 from "@/app/assets/images/t-1.svg";

function Team() {
  return (
    <div className="flex flex-col items-center justify-center text-center pb-20 px-3 md:px-0">
      <div className="flex gap-2 items-center">
        <div className="max-w-[100px]">
          <PiHandbagSimpleLight className="text-lightGreen" size={25} />
        </div>
        <span className="text-lightGreen font-medium text-[16px]">Teams</span>
      </div>
      <h1 className="text-[30px] leading-[30px] text-darkGreen md:text-[40px] md:leading-[40px] font-medium mt-4">
        Match with 300+ employers
      </h1>
      <div class="flex flex-wrap gap-5 sm:gap-10 items-center justify-center max-w-[800px] mt-8">
        <Image src={logo1} className="w-[70px] sm:w-[110px] h-auto" />
        <Image src={logo1} className="w-[70px] sm:w-[110px] h-auto" />
        <Image src={logo1} className="w-[70px] sm:w-[110px] h-auto" />
        <Image src={logo1} className="w-[70px] sm:w-[110px] h-auto" />
        <Image src={logo1} className="w-[70px] sm:w-[110px] h-auto" />
        <Image src={logo1} className="w-[70px] sm:w-[110px] h-auto" />
        <Image src={logo1} className="w-[70px] sm:w-[110px] h-auto" />
        <Image src={logo1} className="w-[70px] sm:w-[110px] h-auto" />
      </div>
    </div>
  );
}

export default Team;
