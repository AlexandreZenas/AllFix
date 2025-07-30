import { useEffect, useState } from "react";
import { MainButton } from "../../../components/buttons/main-button";
import "./index.css";

export function Hero() {
    return (
        <section id="Hero" className={`bg-[url('/images/hero/bg-image.png')] bg-no-repeat bg-cover px-[2px] pt-24 pb-32 relative`}>            
            <div className="bg-[rgba(0,0,0,0.5)] w-full h-full z-10 absolute top-0 left-0 "></div>
            <div className="z-50 relative max-w-[1280px] mx-auto px-[4%] flex md:justify-center justify-start md:items-center items-center gap-8 flex-col py-8 mt-24  ">
                <h1 className="text-green  text-center items-center justify-center md:font-bold font-semibold  md:text-5xl text-4xl lg:max-w-[680px] tracking-[-2px]">Jardinagem e paisagismo profissional</h1>
                <p className="text-white text-center items-center justify-center lg:max-w-[640px] font-normal leading-snug">O cuidado que seu jardim merece .</p>
                <MainButton textButton="Fazer um orçamento"  linkButton="https://wa.me/5521997155021"  target="_blank"></MainButton>
            </div>
        </section>
    );
};