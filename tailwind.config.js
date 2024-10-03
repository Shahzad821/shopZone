export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Ensure the key for the clip-path is unique
      clipPath: {
        customClipPath: "polygon(0 24%, 93% 2%, 100% 80%, 0% 100%)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",

          lg: "4rem",
          xl: "6rem",
        },
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
