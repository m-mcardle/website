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
      pattern: /bg-(green|blue)-(900|950)/,
    },
  ]
}
