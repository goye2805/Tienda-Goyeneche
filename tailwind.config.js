module.exports = {

  daisyui: {
    themes: ["light", "dark", "aqua", "emerald"],
  },

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
