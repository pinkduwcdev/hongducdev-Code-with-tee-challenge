"use client";
import { useState } from "react";
import RatingCard from "@/components/rating-card";
import { IRatingCard } from "@/@types";
import Prev from "./icons/prev";
import Next from "./icons/next";

interface SliderProps {
  ratingCardList: IRatingCard[];
}

const Slider = ({ ratingCardList }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ratingCardList.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + ratingCardList.length) % ratingCardList.length
    );
  };

  return (
    <div className="w-full max-w-7xl flex flex-col items-center">
      <div className="relative w-full flex justify-center items-center overflow-hidden h-[450px]">
        {ratingCardList.map((card, index) => {
          const isActive = index === currentIndex;
          const isPrev =
            index ===
            (currentIndex - 1 + ratingCardList.length) % ratingCardList.length;
          const isNext = index === (currentIndex + 1) % ratingCardList.length;

          return (
            <div
              key={card.id}
              className={`absolute transition-transform duration-500 ${
                isActive ? "z-20" : "z-10"
              } ${isActive ? "opacity-100" : "opacity-75"}`}
              style={{
                left: isActive ? "50%" : isPrev ? "25%" : "75%",
                transform: isActive
                  ? "translateX(-50%) scale(1)"
                  : "translateX(-50%) scale(0.75)",
              }}
            >
              <RatingCard card={card} />
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <button
          className="w-12 h-12 flex items-center justify-center border-[1.8px] border-[#B6B6B6] rounded-full shadow-xl"
          onClick={prevSlide}
        >
          <Prev />
        </button>
        <button
          className="w-12 h-12 flex items-center justify-center border-[1.8px] border-[#B6B6B6] rounded-full shadow-xl"
          onClick={nextSlide}
        >
          <Next />
        </button>
      </div>
    </div>
  );
};

export default Slider;
