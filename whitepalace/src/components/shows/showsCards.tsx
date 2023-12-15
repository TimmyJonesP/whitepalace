import Image from "next/image";
import React from "react";

const ShowsCards = () => {
  return (
    <>
      <div className="max-w-xs container m-5 bg-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-sm">
        <div>
          <h2 className="text-5xl mt-5 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
            15 FEB
          </h2>
          <p className="ml-4 mt-1 text-xl mb-2 text-gray-700 hover:underline cursor-pointer">
            MAKENA
          </p>
        </div>
        <div className="flex p-4 justify-end  ">
          <div className="flex items-right">
            <h2 className="text-gray-800 bg-green-300 p-3 font-bold cursor-pointer hover:scale-95 hover:bg-green-500 transform transition duration-300">
              GET TICKETS
            </h2>
          </div>
          <div className="flex space-x-2">
            <div className="flex space-x-1 items-center"></div>
            <div className="flex space-x-1 items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowsCards;
