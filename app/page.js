'use client'
import { useEffect } from "react";
import Link from "next/link";
import Button from "@/components/Button.js"
import InstructionCard from "@/components/InstructionCard.js";
import Chatbot from "@/components/Chatbot.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/Home.css'

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  const OpenInstructionBox = () => {
    const InstructionBox = document.getElementsByClassName('instructionCard')[0]
    InstructionBox.classList.add("instructionCardVisible")
  }
  return (
    <main className="HomePage w-full flex items-center justify-evenly relative overflow-hidden">
      <InstructionCard />
      <Chatbot />
      <div id="mainLeft" className="h-full flex flex-col justify-center gap-8 w-[60%]">
        <div id="LMainTop" className="flex flex-col px-28 justify-center gap-4">
          <div data-aos="fade-right" data-aos-delay="300" id="mainline" className="flex flex-col justify-center gap-2 text-4xl font-bold">
            <span>
              <span className="text-sky-600">Crop Care :</span> <span>Check Your Plant's</span>
            </span>
            <span>
              health instantly and  easily
            </span>
          </div>
          <div data-aos="zoom-in-right" id="supportingText" data-aos-delay="600" className=" text-slate-700 text-lg">
            Easily identify plant diseases by uploading a photo of your plant's leaf, Get
            instant results, treatment options. and care tips to keep your plants thriving,
          </div>
        </div>
        <div id="mainBTNS" className="flex items-center gap-6 px-28">
          <div data-aos="fade-right" data-aos-delay="800" className="flex items-center gap-2 cursor-pointer Navbtn relative" onClick={OpenInstructionBox}>
            <span id="instruction" className="text-lg font-semibold">Instruction : How to ?</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
            </svg>
          </div>
          <Link href={"/UploadPhoto"} data-aos="fade-left" data-aos-delay="800" className="takeAsnapBtn">
            <span className="circle1"></span>
            <span className="circle2"></span>
            <span className="circle3"></span>
            <span className="circle4"></span>
            <span className="circle5"></span>
            <span className="text">Scan Plant</span>
          </Link>
        </div>
      </div>
      <div id="mainright" className="h-full flex flex-col items-center justify-center gap-4">
        <img data-aos="fade-left" data-aos-delay="300" src="image.jpg" alt="Not Found" id="mainimg" className="h-[60%] rounded-lg" />
        <div data-aos="zoom-in-down" data-aos-delay="800">
          <Button />
        </div>
      </div>
    </main>
  );
}