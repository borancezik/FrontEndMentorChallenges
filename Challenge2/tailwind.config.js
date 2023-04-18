/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      width: {
        130: "40rem",
        128: "32rem",
        110: "28rem",
      },
      height: {
        128: "32rem",
        200: "48rem",
      },
    },
  },
  plugins: [],
};
