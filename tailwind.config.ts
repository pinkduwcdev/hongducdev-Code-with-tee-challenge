import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-piggy-pink": "linear-gradient(90deg, #ee9ca7, #ffdde1)",
        "gradient-digital-water": "linear-gradient(90deg, #ACB6E5, #74ebd5)",
        "gradient-roseanna": "linear-gradient(90deg, #FFAFBD, #ffc3a0)",
        "gradient-summer-dog": "linear-gradient(90deg, #a8ff78, #78ffd6)",
        "gradient-radar": "linear-gradient(90deg, #A770EF, #CF8BF3, #FDB99B)",
        "gradient-sylvia": "linear-gradient(90deg, #ff4b1f, #ff9068)",
      },
    },
  },
  plugins: [],
};
export default config;
