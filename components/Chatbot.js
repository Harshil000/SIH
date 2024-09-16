"use clinet"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { useState } from "react";

const Chatbot = () => {

    const [userInput, setUserInput] = useState("")
    const [FetchingData, setFetchingData] = useState(false)

    const genAI = new GoogleGenerativeAI("AIzaSyALFwQ3discr7RwslxPhqEmLMatniBWVU8");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: "You are a AI ChatBot created by CropCare company to assist farmers identify crop disease and provide them with its cure" });

    const handleSendMessage = async () => {
        if (userInput == "") {
            let resdiv = document.createElement('div')
            let resspan = document.createElement('span')
            resspan.innerText = "Ask Something"
            resspan.classList = "px-2 py-2 bg-red-400 w-fit rounded-full text-white"
            resdiv.append(resspan)
            document.getElementsByClassName("chatArea")[0].append(resdiv)
        } else {
            let div = document.createElement('div')
            div.classList = "text-right"
            let span = document.createElement('span')
            span.classList = "px-2 py-2 bg-blue-400 w-fit rounded-full"
            span.innerText = `${userInput}`
            div.append(span)
            document.getElementsByClassName("chatArea")[0].append(div)
            setUserInput("")
            setFetchingData(true)
            const result = await model.generateContent(userInput);
            console.log(result.response.text());
            let resdiv = document.createElement('div')
            let resspan = document.createElement('span')
            resspan.innerText = `${result.response.text()}`
            resspan.classList = "px-2 py-2 w-fit rounded-full"
            resdiv.append(resspan)
            document.getElementsByClassName("chatArea")[0].append(resdiv)
            setFetchingData(false)
        }
    }

    const handleKeyPress = (e) => {
        console.log(e.key)
        if (e.key === "Enter") {
            handleSendMessage()
        }
    }

    const ShowChatBot = () => {
        document.getElementById("chatbot").classList.toggle("chatToggle")
    }

    const RemoveChatBot = () => {
        document.getElementById("chatbot").classList.add("chatToggle")
    }
    return (
        <div className='absolute bottom-4 right-4 z-10'>
            <div id="chatbot" className='chatToggle mb-20 h-[75vh] w-[25vw] border border-black bg-slate-200 rounded-lg flex flex-col items-center overflow-hidden'>
                <div className='w-full h-[10%] bg-white flex items-center justify-between px-4 border-b-2 border-b-sky-600'>
                    <div className="flex items-center gap-2">
                        <img src="logo.png" alt="not found" className='h-8' />
                        <span>AI-enabled Assistant</span>
                    </div>
                    <img src="cross.gif" alt="Not Found" className="h-8 cursor-pointer" onClick={RemoveChatBot} />
                </div>
                <div className='chatArea w-full h-[80%] overflow-y-scroll flex flex-col gap-4 py-4 px-2 '>
                    <div>
                        <span className="px-2 py-2 w-fit rounded-full">Hello , How can i help you ?</span>
                    </div>
                </div>
                <div className='w-full h-[10%] flex items-center justify-evenly border-t-2 border-t-sky-600 bg-white'>
                    {FetchingData && <div className="w-[70%] flex items-center justify-center">
                        <img src="Loader.gif" alt="Not Found" className="h-10" />
                    </div>}
                    {!FetchingData && <input type="text" value={userInput} placeholder='Enter Your Question .' className='px-4 py-1 w-[70%] rounded-lg border-2 border-slate-600' onKeyDown={(e) => { handleKeyPress(e) }} onChange={(e) => { setUserInput(e.target.value) }} />}
                    <button className="chatbutton" onClick={handleSendMessage}>
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        fill="currentColor"
                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <span>Send</span>
                    </button>

                </div>
            </div>
            <div className='absolute bottom-0 right-0 h-16  w-16  rounded-full bg-sky-600 cursor-pointer overflow-hidden flex items-center justify-center text-white text-xl' onClick={ShowChatBot}>
                Chat !
            </div>
        </div >
    )
}

export default Chatbot
