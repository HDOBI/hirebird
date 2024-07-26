import React from "react";
import Image from "next/image";
import Button from "./Button";
import thumbIcon from "@/app/assets/images/thumb.svg";
import Card1 from "@/app/assets/images/card-1.png";
import Card2 from "@/app/assets/images/card-2.png";
import Card3 from "@/app/assets/images/card-3.png";

function Hero() {
  return (
    <div className="relative z-10 px-3 md:px-0 overflow-x-hidden">
      <div className="flex flex-col gap-4 text-center pt-14">
        <h1 className="text-[40px] leading-[40px] text-darkGreen md:text-[65px] md:leading-[70px] font-medium mt-20">
          Match. Meet. Get Hired.
        </h1>
        <p className="max-w-[500px] mx-auto text-[#758374] font-semibold text-[16px]">
          Try the simplest way to get your dream job: create a profile, match
          with employers, and get hired.
        </p>
        <div className="mx-auto mt-1">
          <Button
            name="Start Matching"
            className="bg-forestGreen text-pastelGreen"
            img={thumbIcon}
          />
        </div>
      </div>
      <div className="relative">
        <div className="flex flex-col gap-4 text-center pt-14 h-[480vh] md:h-[520px]"></div>
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] md:w-[240px] h-auto -ml-[100px] md:-ml-[360px] -rotate-3">
          <Image className="bg-white rounded-[20px]" src={Card1} />
        </div>
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] md:w-[240px] h-auto ml-[100px] md:ml-[360px] rotate-3">
          <Image className="bg-white rounded-[20px]" src={Card3} />
        </div>
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[230px] md:w-[360px] h-auto">
          <Image className="bg-white rounded-[20px]" src={Card2} />
        </div>
        <div className="absolute inset-0 bg-pastelGreen h-[400px] w-full blur-[74px] z-[-1]"></div>
      </div>
    </div>
  );
}

export default Hero;
