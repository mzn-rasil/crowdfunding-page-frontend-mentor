/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "primary-moderate-cyan": "hsl(176, 50%, 47%)",
                "primary-dark-cyan": "hsl(176, 72%, 28%)",
                "neutral-black": "hsl(0, 0%, 0%)",
                "neutral-dark-gray": "hsl(0, 0%, 48%)",
            },
            fontFamily: {
                "commissioner": ["Commissioner", "sans-serif"],
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}