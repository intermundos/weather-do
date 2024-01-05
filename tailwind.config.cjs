/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}' ],
    theme: {
        container: false,
    },
    plugins: [
        require( 'daisyui' )
    ],
    daisyui: {
        themes: [ 'nord' ],
        styled: true,
    }
}
