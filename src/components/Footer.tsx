import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";

const Footer = () => {
    return (
        <div className="w-full h-20 bg-amazon_light text-gray-400 flex items-center justify-center gap-4">
            <Image className="w-24" src={logo} alt="Logo"/>
            <p className="text-sm ">All rights reserved @Yasir Qumane </p>
        </div>
    );
}

export default Footer;