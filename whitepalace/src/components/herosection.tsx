import React from "react";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <div className="w-full h-screen py-2">
      <div
        className="bg-cover bg-center h-64 md:h-96 lg:h-4/6 w-5/6 ml-5 mt-5 bg-no-repeat relative rounded-3xl "
        style={{ backgroundImage: "url('/img/wp-test.jpg')" }}
      >
        <div className=""></div>
      </div>
      <div className="absolute top-1/3 right-36 p-5 bg-amber-900 border-orange-100 border-2 rounded-3xl text-2xl bg-opacity-75">
        ABOUT US
      </div>{" "}
    </div>
  );
};
