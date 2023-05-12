/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: 'all',
  singleQuote: true,
  semi: false,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
}
