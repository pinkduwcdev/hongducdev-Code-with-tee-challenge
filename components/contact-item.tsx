import { ISocial } from "@/@types";
import React from "react";

interface ContactItemProps {
  social: ISocial;
}

const ContactItem = ({ social }: ContactItemProps) => {
  return (
    <a href={social.link}>
      <div className="group">
        <div className="relative w-[350px] p-5 rounded-md border-x border-t border-zinc-300 text-zinc-500 transition-all duration-300 ease-in-out group-hover:text-zinc-800">
          <div className="flex items-center justify-between">
            <div className="text-3xl">{social.icon}</div>
            <span className="text-xl font-semibold">{social.title}</span>
          </div>
          <div className="absolute rounded-md left-0 bottom-0 w-full h-[2px] bg-gradient-summer-dog transition-all duration-300 ease-in-out group-hover:h-full z-[-1]"></div>
        </div>
      </div>
    </a>
  );
};

export default ContactItem;
