/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
