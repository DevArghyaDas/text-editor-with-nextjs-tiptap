"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const DarkButton = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="p-2 rounded-lg border cursor-pointer shadow-slate-400 shadow-lg hover:shadow-xl duration-200">
        {theme === "dark" ? <Sun /> : <MoonStar />}
      </button>
    </>
  );
};

export default DarkButton;
