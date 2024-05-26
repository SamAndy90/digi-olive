import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["var(--font-helvetica)", ...fontFamily.sans],
        inter: ["var(--font-inter)"],
        inconsolata: ["var(--font-inconsolata)"],
        karla: ["var(--font-karla)"],
        sfpro: ["var(--font-sfpro)"],
        hiragino: ["var(--font-hiragino)"],
      },
      colors: {
        do_body: {
          500: "#F7E9D1",
        },
        do_black: {
          900: "#101828",
          950: "#0E1118",
        },
        do_green: {
          500: "#184530",
        },
        do_red: {
          400: "#FE5824",
          500: "#E43D12",
        },
        do_blue: {
          500: "#0072BB",
        },
      },
    },
  },
  plugins: [],
};
export default config;
