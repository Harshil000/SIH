"use client"
import Chatbot from "@/components/Chatbot.js"
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from "react";

const page = () => {

  const { user, error, isLoading } = useUser();
  const [DataArray, setDataArray] = useState([])

  const getHistory = async () => {
    if (!user) {
      console.error("User is undefined. Cannot fetch history.");
      return;
    }

    const res = await fetch("/api/getHistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: user.nickname }),
    });
    let response = await res.json();
    setDataArray(response.data.slice(1, response.data.length));
  };

  useEffect(() => {
    if (!isLoading && user) {
      getHistory();
    }
  }, [isLoading, user]);

  useEffect(() => {
    console.log("Updated DataArray:", DataArray);
  }, [DataArray]);

  const DeleteData = async (e) => {
    // console.log(e.target.parentElement.children[0].src)
    const res = await fetch("/api/DeleteData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: user.nickname ,  img: e.target.parentElement.children[0].src }),
    });
    let response = await res.json();
    setDataArray(response.data.slice(1, response.data.length));
  }

  return (
    <div className="relative w-full h-[90vh] flex flex-col items-center justify-evenly ">
      <Chatbot />
      <div className="w-[90%] h-[90%] flex flex-col items-center bg-white rounded-lg shadow-lg gap-2 overflow-scroll">
        {DataArray.length > 0 ? (
          DataArray.map((item) => (
            <div key={item.uuid4} className="text-red-800 w-full h-48 text-xl rounded-lg border border-gray-600 flex items-center gap-2 relative">
              <img src={item.img} alt="Image" className=" h-[95%] text-xl ml-2 rounded-md" />
              <div className="flex flex-col items-start h-[95%] gap-1">
                <div className="text-2xl font-bold text-red-800">Name :- {item.PlantName}</div>
                <div className="text-lg font-semibold text-gray-600">Status :- {item.Status}</div>
                <div className="text-md font-medium text-gray-500">Cure :- {item.Cure}</div>
                <div className="text-sm font-light text-gray-400">MaintainHealthy :- {item.MaintainHealthy}</div>
                <div className="text-sm font-light text-gray-400">RecommendedMedicine :- {item.RecommendedMedicine}</div>
              </div>
              <div className="absolute h-full bg-red-600 flex items-center justify-center right-0 w-20 text-white font-bold text-lg hover:bg-red-700 cursor-pointer" onClick={(e) => { DeleteData(e) }}>
                Delete
              </div>
            </div>
          ))
        ) : (
          <div>No Data Available</div>
        )}
      </div>
    </div>
  )
}

export default page