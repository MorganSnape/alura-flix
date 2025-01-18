/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-inset": "inset 0px 0px 13px 4px rgba(34, 113, 209, 1)",
      },
    },
  },
  plugins: [],
};
