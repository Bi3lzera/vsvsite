import { withUt } from "uploadthing/tw";

export default withUt({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0989FF",
        topHeadingPrimary: "#010F1C",
        topHeadingSecondary: "#021d35",
        pink: "#FD4B6B",
        greenMenus: "#12D03A",
        greenMain: "#2E8B57",
      },

      container: {
        center: true,
        padding: "14px",
      },
    },
  },
  plugins: [],
});
