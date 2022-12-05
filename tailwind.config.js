/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-openSans)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        violet: "hsl(257, 40%, 49%)",
        "magenta-soft": "hsl(300, 69%, 71%)",
      },
      backgroundImage: {
        "background-pattern-dt": "url('/images/bg-desktop.svg')",
        "background-pattern-mb": "url('/images/bg-mobile.svg')",
        "hero-image": "url('/images/illustration-mockups.svg')",
      },
    },
  },
  plugins: [],
};
