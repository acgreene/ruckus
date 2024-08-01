import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "lander-menu-height": "calc(100vh - 80px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...colors,
      },
      keyframes: {
        moveGradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      animation: {
        gradient: "moveGradient 100s linear infinite",
      },
    },
    colors: {
      "back-heavy": "#14181c",
      "back-med": "#191e23",
      "back-lite": "#1e2328",
      "ruckus-orange": "#F84125",
      "ruckus-yellow": "#EFC258",
      "ruckus-blue": "#6F79DC",
      "ruckus-purple": "#D15EA1",
      "ruckus-brown": "#3A2015",
    },
    screens: {
      xxs: "360px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1450px",
      xxl: "1700px",
    },
  },
  plugins: [],
};
export default config;
