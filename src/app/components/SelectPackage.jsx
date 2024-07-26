"use client";
import React, { useState } from "react";

function SelectPackage({ packageName, price }) {
  const [ChangeColor, setChangeColor] = useState(false);

  const handleClick = () => {
    setChangeColor(!ChangeColor);
  };

  return (
    <div className="flex w-full text-[15px] items-center justify-between font-medium rounded-full py-[12.5px] border px-4 max-w-[400px] mx-auto bg-white">
      <div className="flex items-center">
        <span className="min-w-[65px] max-w-[65px] text-left">
          {packageName}
        </span>
        <div>
          <div className="relative cursor-pointer" onClick={handleClick}>
            <div className="h-5 w-5 border border-gray-800 rounded-full">
              <div
                className={`top-[3.5px] left-[3px] absolute inset-0 flex items-center justify-center rounded-full h-[13px] w-[13px] z-10 ${
                  ChangeColor ? "bg-forestGreen" : "bg-transparent"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <span>${price}/mo</span>
      </div>
    </div>
  );
}

export default SelectPackage;
