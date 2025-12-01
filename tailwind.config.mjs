import typography from "@tailwindcss/typography";

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    plugins: {
        // Tailwind v4 usa objeto, no array
        typography,
    },
};
