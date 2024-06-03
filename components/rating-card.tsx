import { IRatingCard } from "@/@types";
import Image from "next/image";
import React from "react";
import Star from "./icons/star";

interface RatingCardProps {
  card: IRatingCard;
}

const RatingCard = ({ card }: RatingCardProps) => {
  return (
    <div className="flex gap-[83px] bg-white py-[69px] px-[49px] shadow-[0px_20px_60px_0px_#2E213D14] rounded-[10px] min-w-[864px]">
      <div className="relative">
        <div className="absolute top-[20px] left-[-20px] h-[242px] w-[242px] bg-[#D9D9D9]"></div>
        <div className="relative h-[242px] w-[242px]">
          <Image
            src={card.user.avatar}
            alt={card.user.name}
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
      <div className="max-w-[420px] leading-normal">
        <p className="text-base">{`"${card.comment}"`}</p>
        <div className="mt-[27px] flex items-center">
          {Array.from({ length: card.rating }).map((_, index) => (
            <Star key={index} />
          ))}
        </div>
        <div className="mt-[30px] w-[230px] h-[1px] bg-[#484848]"></div>
        <div className="mt-[15px]">
          <h5 className="font-volkhov text-[32px]">{card.user.name}</h5>
          <span className="mt-[13px] text-base">{card.user.job}</span>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
