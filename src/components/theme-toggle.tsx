"use client";

import { useTheme } from "next-themes";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-20 right-20">
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="text-[#4C4C4C] w-12 h-12 border border-[#4C4C4C] text-2xl rounded-md flex items-center justify-center">
        {theme === "light" ? <RiMoonClearFill /> : <RiSunFill />}
      </button>
    </div>
  );
};
