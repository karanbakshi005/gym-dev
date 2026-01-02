module.exports = {
  content: ["./src/**/*.{html,js,pages,jsx,js}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },

    fontFamily: {
      oswald: ["var(--font-oswald)"],
      geist: ["var(--font-geist-sans)"],
      roboto: ["var(--font-roboto)"],
    },
    backgroundImage: {
      hero: "url(/assets/img/hero/bg.png)",
      membership: "url(/assets/img/membership/bg.jpg)",
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#333",
          100: "#484848",
          200: "#151515",
          300: "#111",
        },
        accent: "#d4000d",
      },
    },
  },
  plugins: [],
};
