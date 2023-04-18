/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      width: {
        140: "40rem",
        135: "35rem",
        128: "32rem",
        110: "28rem",
      },
      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        //prettier-ignore
        "cream": "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
      },
      height: {
        120: "28rem",
        128: "32rem",
        200: "48rem",
      },
    },
  },
  plugins: [],
};
