import React from "react";
import ShowsList from "./showsList";

const Shows = () => {
  return (
    <div>
      <h2 className="bg-zinc-200 p-5 text-black text-6xl font-bold text-center">
        SHOWS
      </h2>
      <div className="">
        <ShowsList />
      </div>
    </div>
  );
};

export default Shows;
