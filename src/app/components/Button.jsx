// components/Button.js
import React from "react";
import Image from "next/image";

const Button = ({ name, className, img, Icon, ...props }) => {
  return (
    <button
      className={`flex items-center px-4 py-[7px] rounded-full border cursor-pointer font-semibold text-[16px] ${className}`}
      {...props}
    >
      {img && <Image src={img} alt="button icon" className="w-5 h-5 mr-1.5" />}
      <div className="mr-1.5">{Icon && !img && Icon}</div>
      {name}
    </button>
  );
};

export default Button;
