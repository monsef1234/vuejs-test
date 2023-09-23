/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "2rem",
      center: true,
      screens: {
        lg: "1200px",
        ["1500px"]: "1500px",
        ["1836px"]: "1736px",
        xl: "2000px",
        "2xl": "2400px",
      },
    },
    extend: {
      keyframes: {
        showMask: {
          "0%": { transform: "opacity(0)" },
          "100%": { transform: "opacity(1)" },
        },
      },
      animation: {
        "show-mask": "showMask 10s ease forwards",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      fontSize: {
        extraSmallText: "12px",
        smallText: "14px",
        normalText: "16px",
        mediumText: "18px",
        largeText: "24px",
        bigText: "40px",
      },
      colors: {
        buttonColorPrimary: "#10B981",
        buttonColorSecondary: "#D1FAE5",
        buttonColorTertiary: "#DBEAFE",
        buttonColorQuaternary: "#E0E3EB",
        textColorPrimary: "#1B1C57",
        textColorSecondary: "#3C4563",
        textColorTertiary: "#626687",
        textColorQuaternary: "#888B97",
        miniTitleColor: "#F59E0B",
        iconColor: "#F59E0B",
      },
    },
  },
  plugins: [],
};
