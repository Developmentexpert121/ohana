import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-b": "linear-gradient(90deg, #8C7630 28.77%, rgba(194, 181, 96, 0) 237%)",
        "gradient-light-dark": "linear-gradient(0deg, rgba(29, 29, 29, 0.00) 0%, rgba(29, 29, 29, 0.00) 100%)",
        "gradient-black-transparent": "linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.87) 57.72%, #1D1D1D 93.46%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "color-light-dark": "rgba(94, 94, 94, 0.15)",
        "transparent": "rgba(94, 94, 94, 0)",
        "overlay-35": "rgba(0, 0, 0, 0.35)",
        "dark-body": "#1d1d1d",
        "light": "#e0e0e0",
        "light-transparent": "rgba(255, 255, 255, 0.03)",
        "light-transparent2": "rgba(29, 29, 29, 0.07)"
      },
      textColor: {
        "light": "#e0e0e0",
        "gray-700": "#747474",
        "gray-500": "#545454",
        "dark-body": "#1d1d1d",
      },
      fontSize: {
        "7xl": ["4.625rem", "1.2"],
        "xl": ["20px", "1.5"],
        "5xl": ["54px", "1.2"],
        "42px": ["42px", "1.2"],
        "lg": ["18px", "1.7"],
      },
      maxWidth: {
        "7xl": "58rem",
        "860": "860px",
        "1000": "1000px",
        "1310": "1310px",
      },
      fontWeight: {
        "normal": "400",
      },
      padding: {
        "16": "50px",
        "80": "80px",
        "18px": "18px",
        "25px": "25px",
        "35px": "35px",
        "9px": "9px",
        "sm": "10px",
        "2": "15px",
        "15": "45px",
        "20": "74px",
        "3": "0.813rem",
        "30": "115px",
        "34": "145px",
        
      },
      borderRadius: {
        'lg': '12px',
      },
      width: {
        "50px": "50px"
      },
      backdropBlur: {
        "sm": "8.5px"
      },
      fontFamily: {
        "trajan-regular": "trajan_proregular",
        "trajan-bold": "trajan_probold",
      },
      borderColor: {
        "light-transparent" : "rgba(255, 255, 255, 0.10)",
        "light-transparent2": "rgba(29, 29, 29, 0.07)"
      },
    },

  },
  plugins: [],
};
export default config;
