"use client"
import Chatbot from "@/components/Chatbot.js";
import "./about.css"

const page = () => {
  return (
    <main className='relative'>
      <Chatbot />
      <div className="aboutmain flex items-center justify-evenly">
        <div id="mainleft" className="flex flex-col px-16 py-8 h-full w-[45%] gap-4">
          <div className="text-sky-600 font-semibold text-2xl">What do we actually Do ?</div>
          <div>
            At FasalRakshak, we are dedicated to empowering farmers with the latest technological innovations to enhance crop health and yield. Our team, united by a shared passion for agriculture, is focused on simplifying plant disease diagnosis, helping farmers take immediate and effective action.
          </div>
          <div>
            Our platform combines state-of-the-art AI-based image analysis with practical, easy-to-follow advice, ensuring farmers can diagnose plant diseases and receive care recommendations quickly. FasalRakshak is designed with farmers in mind, offering a user-friendly experience that allows them to make the most of their resources and improve crop outcomes.
          </div>
          <div>
            We believe in inclusivity and accessibility, which is why our platform supports multiple languages and provides personalized guidance tailored to the unique needs of every farmer. Regardless of technical know-how or geographic location, FasalRakshak is here to help farmers make informed decisions with confidence.
          </div>
          <div>
            Our mission is to foster a future where farming is more sustainable, crops are healthier, and yields are consistently improved through reliable, technology-driven solutions.
          </div>
        </div>
        <div id="mainright" className="flex flex-col h-full w-[45%] py-8 px-16 gap-16">
          <div className="flex flex-col gap-4">
            <div className="text-sky-600 font-semibold text-2xl">OUR VISION :- </div>
            <span>
              Social: Empowers farmers with knowledge and tools for
              early disease detection, reducing crop loss and
              enhancing food security.
            </span>
            <span>
              Economic: Increases yield, lowers treatment costs, and
              improves profitability for farmers.
            </span>
            <span>
              Environmental: Promotes sustainable farming by
              reducing the overuse of pesticides through precise
              disease management.
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-sky-600 font-semibold text-2xl">Contact Us</div>
            <div id="contact" className="flex items-center justify-evenly w-full">
              <div className="flex items-center gap-2">
                <img src="mail.gif" alt="Not Found" className="h-8" />
                <span>:- SSIIHH00001@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="call.gif" alt="Not Found" className="h-8" />
                <span>:- 777XXX5X5X</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page