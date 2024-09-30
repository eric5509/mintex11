import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainDark: "#210716",
        mainLight: "white",
        secondary: "#22577A",
        prim: "#9DFBFA",
        subText: "#5090A0"
      },
     fontSize:{
      '9': '9px',
      '10': '10px',
      '11': '11px',
      '13': '13px',
      '15': '15px',
      '17': '17px'
     },
      height:{
        "13": "50px"
      }
    },
  },
  plugins: [],
};
export default config;
