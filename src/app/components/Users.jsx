import React from "react";
import Image from "next/image";
import { RiTeamLine } from "react-icons/ri";
import girl from "@/app/assets/images/girl.png";
import { CiPlay1 } from "react-icons/ci";
import Button from "./Button";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsBuildings } from "react-icons/bs";

function Users() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 sm:py-20 px-3 md:px-0 overflow-x-hidden">
      <div className="flex gap-2 items-center">
        <div className="max-w-[100px]">
          <RiTeamLine className="text-lightGreen" size={20} />
        </div>
        <span className="text-lightGreen font-medium text-[16px]">
          Hirebird Users
        </span>
      </div>
      <h1 className="text-[30px] leading-[30px] text-darkGreen md:text-[40px] md:leading-[40px] font-medium mt-4">
        Meet people who found their jobs
      </h1>
      <p className="max-w-[390px] text-greenishGray font-semibold text-[18px] mt-8">
        “I signed up for Hirebird, and{" "}
        <span className="text-darkGreen">
          within 2 days, I had an interview
        </span>{" "}
        with my current employer”
      </p>
      <div className="relative">
        <div className="relative">
          <div className="h-[370px] md:h-[470px]"></div>
          <div className=" absolute top-10 md:top-14 left-1/2 -translate-x-1/2 hover:scale-110 w-[270px] md:w-[330px] h-auto -rotate-3 hover:rotate-0 transition duration-300">
            <Image
              className="bg-white shadow-lg rounded-[20px] w-full h-full object-cover"
              src={girl}
            />
            <div className=" cursor-pointer flex items-center justify-center h-[35px] w-[35px] absolute top-4 right-4 bg-[#716b61] rounded-full">
              <CiPlay1 className="text-white" size={20} />
            </div>
          </div>
          <div className="w-[270px] md:w-[330px] mx-auto text-left ml-3">
            <p className="mt-12 text-darkGreen font-medium">
              Maddie, College Student
            </p>
            <p className="text-greenishGray text-[16px] font-semibold mt-2.5">
              Got a job on Hirebird working in Marketing!
            </p>
          </div>
        </div>
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px]  h-auto -ml-[230px] -rotate-2">
          <Button
            name="Marketing"
            className="bg-blackShade text-grayMedium text-[14px] py-1 px-2.5"
            Icon={
              <TfiAnnouncement size={19} className="text-grayMedium" />
            }
          />
        </div>
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px]  h-auto ml-[290px] rotate-2">
          <Button
            name="New York"
            className="bg-blackShade text-grayMedium text-[14px] py-1 px-2.5"
            Icon={<BsBuildings size={19} className="text-grayMedium" />}
          />
        </div>
      </div>
    </div>
  );
}

export default Users;
