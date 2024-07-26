import React from "react";
import { TfiFaceSmile } from "react-icons/tfi";
import matchBox from "@/app/assets/images/macth.png";
import Image from "next/image";
import Button from "./Button";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

function DidntMatch() {
  return (
    <div className="flex flex-col items-center justify-center text-center pb-20 px-3 md:px-0">
      <div className="flex gap-2 items-center">
        <div className="max-w-[100px]">
          <TfiFaceSmile className="text-lightGreen" size={25} />
        </div>
        <span className="text-lightGreen font-medium text-[16px]">
          Transparency
        </span>
      </div>
      <h1 className="text-[30px] leading-[30px] text-darkGreen md:text-[40px] md:leading-[40px] font-medium mt-4">
        Didn’t match – no worries!
      </h1>
      <div className="flex flex-col md:flex-row gap-20 md:gap-10 max-w-[380px] md:max-w-[900px] mx-auto mt-10 md:mt-16">
        <div className="bg-white rounded-[25px] md:w-1/2 h-[400px] md:h-[450px] p-6 text-left shadow-matchBox relative overflow-hidden">
          <div className="mt-[230px] md:mt-[290px]">
            <h5 className="text-darkGreen font-semibold">
              See exactly what happened
            </h5>
            <p className="text-greenishGray font-semibold mt-4">
              Hirebird gives you full transparency on your application. See why
              you’ve missed out on the job you wanted
            </p>
          </div>
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto ml-[230px] -rotate-1">
            <div className="flex gap-1 items-center">
              <Button
                name="Adaptability"
                className="py-[3px] text-[14.5px] !font-medium bg-pastelGreen text-lightGreen px-1"
                Icon={<CiCircleCheck size={21} className="text-lightGreen" />}
              />
              <Button
                name="Adaptability"
                className="py-[3px] text-[14.5px] !font-medium bg-pastelGreen text-lightGreen px-1"
                Icon={<CiCircleCheck size={21} className="text-lightGreen" />}
              />
             <Button
                name="Flutter"
                className="py-[3px] text-[14.5px] !font-medium bg-blackShade text-greenishGray px-1"
                Icon={
                  <IoIosCloseCircleOutline
                    size={21}
                    className="text-greenishGray"
                  />
                }
              />
              <Button
                name="Adaptability"
                className="py-[3px] text-[14.5px] !font-medium bg-blackShade text-greenishGray px-1"
                Icon={
                  <IoIosCloseCircleOutline
                    size={21}
                    className="text-greenishGray"
                  />
                }
              />
               <Button
                name="Adaptability"
                className="py-[3px] text-[14.5px] !font-medium bg-blackShade text-greenishGray px-1"
                Icon={
                  <IoIosCloseCircleOutline
                    size={21}
                    className="text-greenishGray"
                  />
                }
              />
                <Button
                name="Adaptability"
                className="py-[3px] text-[14.5px] !font-medium bg-blackShade text-greenishGray px-1"
                Icon={
                  <IoIosCloseCircleOutline
                    size={21}
                    className="text-greenishGray"
                  />
                }
              />
            </div>
          </div>
          <div className="absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto -rotate-1">
            <div className="flex gap-1 items-center">
              <Button
                name="Adaptability"
                className="py-[3px] text-[14.5px] !font-medium bg-pastelGreen text-lightGreen px-1"
                Icon={<CiCircleCheck size={21} className="text-lightGreen" />}
              />
              <Button
                name="Adaptability"
                className="py-[3px] text-[14.5px] !font-medium bg-pastelGreen text-lightGreen px-1"
                Icon={<CiCircleCheck size={21} className="text-lightGreen" />}
              />
              <Button
                name="Adaptability"
                className="py-[3px] text-[14.5px] !font-medium bg-pastelGreen text-lightGreen px-1"
                Icon={<CiCircleCheck size={21} className="text-lightGreen" />}
              />
              <Button
                name="Adaptability"
                className="py-[3px] text-[14.5px] !font-medium bg-blackShade text-greenishGray px-1"
                Icon={
                  <IoIosCloseCircleOutline
                    size={21}
                    className="text-greenishGray"
                  />
                }
              />
               <Button
                name="Adaptability"
                className="py-[3px] text-[14.5px] !font-medium bg-blackShade text-greenishGray px-1"
                Icon={
                  <IoIosCloseCircleOutline
                    size={21}
                    className="text-greenishGray"
                  />
                }
              />
                <Button
                name="Adaptability"
                className="py-[3px] text-[14.5px] !font-medium bg-blackShade text-greenishGray px-1"
                Icon={
                  <IoIosCloseCircleOutline
                    size={21}
                    className="text-greenishGray"
                  />
                }
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[25px] md:w-1/2 h-[400px] md:h-[450px] p-6 text-left shadow-matchBox relative">
          <div className="mt-[260px] md:mt-[290px]">
            <h5 className="text-darkGreen font-semibold">Get suggestions</h5>
            <p className="text-greenishGray font-semibold mt-4">
              Get improvement suggestion from our AI assistant.
            </p>
          </div>
          <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-auto rotate-3">
            <Image
              className="bg-white rounded-[20px] shadow-shortMatchBox"
              src={matchBox}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DidntMatch;
