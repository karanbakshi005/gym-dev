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

    extend: {},
  },
  plugins: [],
};
//it may be deleted 