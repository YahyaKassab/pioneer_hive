import type { Config } from 'tailwindcss';

const config: Config = {
    // darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './sanity/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                xs: '475px',
            },
            colors: {
                primary: {
                    '100': '#ffcc4d', // Lighter Honey
                    'DEFAULT': '#f4a900', // Honey (Golden Yellow)
                },
                secondary: '#000000', // Black
                accent: '#ffcc4d', // Lighter Honey
                black: {
                    'DEFAULT': '#171717', // Dark text
                    '100': '#333333',
                    '200': '#141413',
                    '300': '#7D8087',
                },
                white: {
                    'DEFAULT': '#f9fafb', // Light gray background
                    '100': '#ffffff',
                },
                foreground: 'var(--foreground)',
            },
            fontFamily: {
                'work-sans': ['var(--font-work-sans)'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            boxShadow: {
                100: '2px 2px 0px 0px rgb(0, 0, 0)',
                200: '2px 2px 0px 2px rgb(0, 0, 0)',
                300: '2px 2px 0px 2px rgb(244, 169, 0)', // Primary Honey color
            },
        },
    },
    plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export default config;
