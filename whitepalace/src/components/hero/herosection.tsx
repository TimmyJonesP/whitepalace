import React from "react";
import Link from "next/link";
export const HeroSection = () => {
  return (
    <div className="w-full h-[94vh]">
      <h1 className="absolute top-36 bg-zinc-300 p-5 text-black text-6xl z-10 bg-opacity-50 font-extrabold md:text-4xl ">
        WHITE PALACE ARGENTINE INDIE-ROCK
      </h1>
      <div
        className="bg-cover bg-center h-[90vh] bg-no-repeat relative "
        style={{ backgroundImage: "url('/img/wp-test.jpg')" }}
      ></div>
      <div className="text-black absolute right-5">
        <Link
          href={"/about"}
          className="text-3xl border-l-2 pr-5 pl-3 border-zinc-300"
        >
          ABOUT
        </Link>
      </div>
    </div>
  );
};
