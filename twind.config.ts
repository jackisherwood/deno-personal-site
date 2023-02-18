import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: colors.blue,
        secondary: colors.indigo
      },

      animation: {
        blob: "blob 7s infinite",
        "orbit": "spin-right 30s linear infinite",
        "reverse-orbit": "spin-left 30s linear infinite",
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)",
          },

          "33%": {
            transform: "scale(1.1)",
          },

          "66%": {
            transform: "scale(0.9)",
          },

          "100%": {
            transform: "scale(1)",
          },
        },

        "spin-right": {
          "100%": {
            transform: "rotate(360deg)",
          },
        },

        "spin-left": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      }
    },
  },
} as Options;
