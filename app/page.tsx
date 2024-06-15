import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-row items-center space-x-10">
      <div className="bg-zinc-500 w-[2px] h-[450px]"></div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-3">
            <div className="h-3 w-[100px] bg-gradient-piggy-pink"></div>
            <div className="h-3 w-[100px] bg-zinc-400"></div>
            <div className="h-3 w-3 bg-zinc-400"></div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-3 w-[300px] bg-gradient-digital-water"></div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-3 w-[150px] bg-gradient-roseanna"></div>
            <div className="h-3 w-3 bg-zinc-400"></div>
            <div className="h-3 w-[100px] bg-zinc-400"></div>
            <div className="h-3 w-[150px] bg-gradient-summer-dog"></div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-3 w-[200px] bg-gradient-sylvia"></div>
            <div className="h-3 w-[100px] bg-zinc-400"></div>
            <div className="h-3 w-3 bg-zinc-400 rounded-full"></div>
            <div className="h-3 w-[150px] bg-gradient-summer-dog"></div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-3 w-[40px]"></div>
            <div className="h-3 w-[200px] bg-gradient-radar"></div>
            <div className="h-3 w-3 bg-zinc-400"></div>
            <div className="h-3 w-[100px] bg-zinc-400"></div>
            <div className="h-3 w-[150px] bg-gradient-digital-water"></div>
          </div>
        </div>
        <div className="">
          <h1 className="text-8xl">hongducdev</h1>
          <span className="text-zinc-300">Front End Developer</span>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-3">
            <div className="h-3 w-[450px] bg-gradient-digital-water"></div>
            <div className="h-3 w-3 bg-zinc-400"></div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-3 w-[40px]"></div>
            <div className="h-3 w-[300px] bg-gradient-radar"></div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-3 w-[200px] bg-gradient-roseanna"></div>
            <div className="h-3 w-[150px] bg-gradient-summer-dog"></div>
            <div className="h-3 w-[150px] bg-gradient-sylvia"></div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-3 w-[100px] bg-gradient-sylvia"></div>
            <div className="h-3 w-[100px] bg-zinc-400"></div>
            <div className="h-3 w-3 bg-zinc-400 rounded-full"></div>
            <div className="h-3 w-[150px] bg-gradient-summer-dog"></div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-3 w-[130px] bg-gradient-roseanna"></div>
            <div className="h-3 w-3 bg-zinc-400"></div>
            <div className="h-3 w-[100px] bg-zinc-400"></div>
            <div className="h-3 w-[150px] bg-gradient-digital-water"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
