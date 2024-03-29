module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // Safelisting some classes to avoid content purge
  safelist: [
    'safelisted',
    {
      pattern: /bg-(green|blue|emerald)-(900|950)/,
    },
  ]
}
