import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        lightredw: "hsl(15, 100%, 70%)",
        softblue: "hsl(195, 74%, 62%)",
        lightreds: "hsl(348, 100%, 68%)",
        limegreen: "hsl(145, 58%, 55%)",
        violet: "hsl(264, 64%, 52%)",
        softorange: "hsl(43, 84%, 65%)",
      },
      neutral: {
        verydarkblue: " hsl(226, 43%, 10%)",
        darkblue: "hsl(235, 46%, 20%)",
        darkbluehover: "hsl(235, 46%, 35%)",
        desaturatedblue: "hsl(235, 45%, 61%)",
        paleblue: "hsl(236, 100%, 87%)",
      },
      white: "#ffff",
    },
    fontFamily: { sans: "Rubik, sans-serif" },
    screens: { desktop: "1140px" },
    extend: {},
  },
  plugins: [],
};
export default config;
