/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx}", "./screens/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        plus: [
          "PlusJakartaSans_400Regular",
          "PlusJakartaSans_500Medium",
          "PlusJakartaSans_600SemiBold",
          "PlusJakartaSans_700Bold",
        ],
      },
    },
  },
  plugins: [],
};
