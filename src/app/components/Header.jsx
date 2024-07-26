import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/images/logo.png";
import Button from "./Button";

function Header() {
  return (
    <div className="backdrop-blur-md fixed top-0 left-0 right-0 flex flex-row items-center justify-between max-w-[1300px] mx-auto px-3 py-3 bg-transparent z-50">
  <div className="max-w-[100px]">
    <Image src={Logo} />
  </div>
  <Button name="Log in" className="bg-white text-darkTeal" />
</div>

  );
}

export default Header;
