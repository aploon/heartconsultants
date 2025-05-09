/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#b71c1c',
        'primary-dark': '#951616',
        secondary: '#1a355e',
        'secondary-dark': '#142947'
      }
    }
  },
  plugins: []
}