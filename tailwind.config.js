module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  // ...
  theme: {
    extend: {
      backgroundImage: {
        carnivor: "url('./assets/carnivor.jpg')",
        herbivor: "url('./assets/herbivor.jpg.webp')",
        aquatic:
          "url('https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860-header-non-dinos2.jpg')",
      },
      backgroundImage: {
        homeBg: "url('/public/assets/global/bgmainBg.png')",
        card: "url('/public/assets/global/cardbg.png')",
      },
      colors: {
        "bg-left": "#73E0A9",
        "bg-right": "#5B68DF",
      },
    },
  },
};
