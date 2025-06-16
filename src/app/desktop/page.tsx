"use client";

import Image from "next/image";
import { FaMoon } from "react-icons/fa";
import ToDoInput from "../../features/profile/detail/component/ToDoInput";
import React, { useState } from "react";
export default function Desktop() {
    return (
        <>
            <div className="relative w-screen h-screen overflow-hidden flex justif-center">
                <div className="absolute inset-0 w-[1440px] h-[300px] ">
                    <Image
                        src={"background.svg"}
                        alt="background"
                        fill={true}
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div
                    className="absolute inset-0  w-[1440px] h-[300px]" // Memastikan overlay menutupi area yang sama dengan gambar
                    style={{
                        background:
                            "linear-gradient(to bottom, #5596FF, #AC2DEB)",
                        opacity: 0.5,
                    }}
                ></div>

                <div className="absolute w-[541px] h-[48px] top-[70px] left-1/2 translate-x-[-50%] flex justify-between items-center z-10">
                    <span className="text-white font-['Josefin Sans'] font-bold text-[40px] tracking-[15px]">
                        TODO
                    </span>
                    <FaMoon size={24} color="#ffffff" />
                </div>
                <div>
                    <ToDoInput />
                </div>
            </div>
        </>
    );
}
