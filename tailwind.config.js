/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                "primary": "#2b303a",
                "secondary": "#0D1117",
                "active": "#cc6600",
                "w": "#f3f4f6",

                "link": "#3b82f6"
            }
        }
    },
    plugins: []
};
