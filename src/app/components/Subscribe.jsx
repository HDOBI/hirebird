import React from "react";
import SelectPackage from "./SelectPackage";
import data from "@/app/utility/subscribe.json";
import Button from "./Button";

function Subscribe() {
  const { plans } = data;

  return (
   <div className="mx-3 sm:mx-3">
     <div className="flex flex-col p-8 items-center justify-center max-w-[440px] shadow-priceBox mx-auto text-center my-4 sm:my-6 px-3 md:px-0 rounded-[20px] overflow-x-hidden">
      <h5 className="text-forestGreen font-medium text-[30px]">overview</h5>
      <p className="text-greenishGray">Confirm your cosemose plan</p>
      <div className="mt-6 w-full px-3 sm:px-6">
        <SelectPackage
          packageName={plans.yearly.packageName}
          price={plans.yearly.price}
        />
      </div>
      <div className="mt-2 w-full px-3 sm:px-6">
        <SelectPackage
          packageName={plans.monthly.packageName}
          price={plans.monthly.price}
        />
      </div>
      <div className="flex flex-col gap-2.5 w-full mt-6 px-3 sm:px-6">
        {plans.monthly.billDatils.map((item, id) => (
          <div>
            <div key={id} className="flex items-center justify-between">
              <div>
                <span>{item.heading}</span>
              </div>
              <div>
                <span>{item.value}</span>
              </div>
            </div>
            <div className="border-dotted border-2 border-forestGreen mt-1"></div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 px-3 sm:px-6 sm:w-full font-light text-[15px]">
        <span className="mt-10 sm:mt-14 text-left font-medium text-[14.5px] text-greenishGray ml-1">
          Card Details:
        </span>
        <div className="flex justify-between border -mt-3 bg-white px-4 py-[10px] rounded-full">
          <input
            placeholder="Card Number"
            className="outline-none w-auto text-[16px]"
          />
          <div>
            <div class="flex items-center">
              <input
                type="number"
                placeholder="MM"
                class="bg-white outline-none w-7 text-[15px] "
              />
              /
              <input
                type="number"
                placeholder="YY"
                maxlength="4"
                class="bg-white outline-none w-7"
              />
              <input
                type="number"
                placeholder="CVV"
                maxlength="4"
                class="bg-white outline-none w-8"
              />
            </div>
          </div>
        </div>
        <Button
          name="Subscribe"
          className="bg-white flex items-center justify-center text-center py-[10.5px] text-forestGreen"
        />
      </div>
    </div>
   </div>
  );
}

export default Subscribe;
