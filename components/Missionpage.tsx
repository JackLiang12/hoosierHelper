import React, { useState } from "react";
import Sponsorbanner from "./Sponsorbanner";

const Missionpage = () => {
  // State to track which item is selected
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const Mission = "Our missionOur missionOur missionOur missionOur missionOur missionOur missionOur missionOur missionOur missionOur missionOur missionOur missionOur missionOur mission";
  const Value = "Our ValueOur ValueOur ValueOur ValueOur ValueOur ValueOur ValueOur ValueOur ValueOur ValueOur ValueOur ValueOur ValueOur ValueOur ValueOur ValueOur ValueOur ValueOur Value";
  const Vision = "Our VisionOur VisionOur VisionOur VisionOur VisionOur VisionOur VisionOur VisionOur VisionOur VisionOur VisionOur VisionOur VisionOur VisionOur VisionOur VisionOur Vision";

  // Function to handle item selection
  const handleSelect = (item: string) => {
    setSelectedItem(item);
    console.log(item);
  };

  return (
    <>
      <div className="bg-blue-700 flex h-[100vh] w-[100vw] justify-center items-center">
        <span
          className={`flex relative z-10 ${
            selectedItem === "Mission" ||
            selectedItem === "Value" ||
            selectedItem === "Vision"
              ? "-translate-y-60 ease-in-out duration-300"
              : ""
          }`}
        >
          <div
            className="bg-white h-[20rem] w-[20rem] rounded-3xl flex justify-center items-center hover:h-[19rem] hover:w-[19rem] ease-in-out duration-300 cursor-pointer border-2 border-gray"
            onClick={() => handleSelect("Mission")}
          >
            <span className="text-5xl font-kanit">Mission</span>
          </div>

          <div
            className="bg-white h-[20rem] w-[20rem] rounded-3xl flex justify-center items-center hover:h-[19rem] hover:w-[19rem] ease-in-out duration-300 cursor-pointer border-2 border-gray"
            onClick={() => handleSelect("Vision")}
          >
            <span className="text-5xl font-kanit">Vision</span>
          </div>
          <div
            className="bg-white h-[20rem] w-[20rem] rounded-3xl flex justify-center items-center hover:h-[19rem] hover:w-[19rem] ease-in-out duration-300 cursor-pointer border-2 border-gray"
            onClick={() => handleSelect("Value")}
          >
            <span className="text-5xl font-kanit">Value</span>
          </div>
        </span>
        {selectedItem === "Mission" ||
        selectedItem === "Value" ||
        selectedItem === "Vision" ? (
          <div
            className={`absolute z-0 bg-white flex w-[60rem] h-[20rem] rounded-lg translate-y-40 ease-in-out duration-300`}
          >
            {selectedItem === "Mission" ? (
              <span className=" overflow-auto p-6">
                <div>
                  <h1 className=" text-4xl mb-5">Mission</h1>
                </div>
                <text className=" text-3xl">{Mission}</text>
              </span>
            ) : (
              ""
            )}
            {selectedItem === "Value" ? (
              <span className=" overflow-auto p-6">
                <div>
                  <h1 className=" text-4xl mb-5">Value</h1>
                </div>
                <text className=" text-3xl ">{Value}</text>
              </span>
            ) : (
              ""
            )}
            {selectedItem === "Vision" ? (
              <span className=" overflow-auto p-6">
                <div>
                  <h1 className=" text-4xl mb-5">Vision</h1>
                </div>
                <text className=" text-3xl ">{Vision}</text>
              </span>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div
            className={`absolute z-0 bg-white flex w-[60rem] h-[20rem] rounded-lg opacity-0 `}
          ></div>
        )}
      </div>
    </>
  );
};

export default Missionpage;
