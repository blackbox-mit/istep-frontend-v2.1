const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#13070C",
      darkblue: "#192847",
      green: "#25926F",
      yellow: "#F8B344",
      orange: "#E07200",
    },
    fontFamily: {
      palanquin: ["Palanquin", "sans-serif"],
      /*sonar: ['sonar-sans', 'sans-serif'], // main font
      karmina: ['karmina', 'serif'], // title font*/
    },
    fontSize: {
      "h-xl": [
        "100px",
        { lineHeight: "110px", fontWeight: "700", fontFamily: "Palanquin" },
      ], // desktop hero text
      "h-lg": [
        "70px",
        { lineHeight: "86px", fontWeight: "700", fontFamily: "Palanquin" },
      ], // desktop title
      "h-l": [
        "56px",
        { lineHeight: "64px", fontWeight: "700", fontFamily: "Palanquin" },
      ], // desktop title
      "h-md": [
        "35px",
        { lineHeight: "45px", fontWeight: "700", fontFamily: "Palanquin" },
      ], // desktop sub title
      "h-sm": [
        "30px",
        { lineHeight: "35px", fontWeight: "700", fontFamily: "Palanquin" },
      ], // desktop sub title
      "h-xs": [
        "25px",
        { lineHeight: "35px", fontWeight: "400", fontFamily: "Palanquin" },
      ], // desktop sub title
      "b-md": [
        "25px",
        { lineHeight: "45px", fontWeight: "700", fontFamily: "Palanquin" },
      ], // button text
      "p-lg": [
        "20px",
        { lineHeight: "26px", fontWeight: "400", fontFamily: "Palanquin" },
      ], // desktop text
      "p-sm": [
        "18px",
        { lineHeight: "24px", fontWeight: "400", fontFamily: "Palanquin" },
      ], // mobile text

      /*'h-xs': ['20px', { lineHeight: '26px', fontWeight: '700', fontFamily: 'Palanquin' }], // mobile sub title
      'p-lg': ['18px', { lineHeight: '28px', fontWeight: '400', fontFamily: 'Palanquin' }], // desktop text
      'p-sm': ['18px', { lineHeight: '28px', fontWeight: '400', fontFamily: 'Palanquin' }], // mobile text
      'p-xs': ['14px', { lineHeight: '18px', fontWeight: '400', fontFamily: 'Palanquin' }], // tiny text
      'label': ['12px', { lineHeight: '16px', fontWeight: '500', fontFamily: 'Palanquin' }], // labels*/
    },
    extend: { fontFamily: { sans: ["Palanquin"] } }, // set default font
  },
  plugins: [],
};
export default config;
