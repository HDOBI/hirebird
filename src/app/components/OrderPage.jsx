import React from "react";
import { BsCheck } from "react-icons/bs";
import Button from "./Button";
import data from "@/app/utility/orderPage.json";

function OrderPage() {
  const { cards, ButtonName } = data;

  return (
    <div className="flex flex-col items-center justify-center text-center pb-20 px-3 md:px-0">
      <div className="max-w-[700px] mx-auto">
        <h1 className="text-[30px] leading-[30px] text-darkGreen md:text-[40px] md:leading-[40px] font-medium mt-4">
          Lorem ipsum dolor sit amet, consectetur.
        </h1>
        <p className=" text-greenishGray font-semibold text-[18px] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-[1200px] mx-auto mt-10 md:mt-14">
        {cards.map((item) => (
          <div
            key={item.id}
            className="md:w-1/3 p-7 shadow-priceBox flex flex-col gap-6 rounded-[15px] relative"
          >
            <div>
              <h5 className="text-darkGreen text-[25px] font-bold">
                <span className="text-[13px] mr-0.5">£</span>
                {item.price}
              </h5>
              <p className="text-greenishGray font-semibold text-[15px] mt-0.5">
                {item.trialDays} days trial
              </p>
            </div>
            <div className="flex flex-col gap-3 text-left">
              {item.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-1">
                  <BsCheck size={25} className="text-green-400" />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mx-auto">
              <Button name={ButtonName} className="bg-pastelGreen px-4" />
            </div>
            {item.id === 1 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto">
                <div className="bg-pastelGreen rounded-full px-3 py-1.5">
                  Most Papular
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderPage;
