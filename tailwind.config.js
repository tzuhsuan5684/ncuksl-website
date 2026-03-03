/** @type {import('tailwindcss').Config} */

// 單一維護 secondary 色票，gray 直接引用，避免重複定義
const slateScale = {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
};

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Microsoft JhengHei"', '"微軟正黑體"', 'sans-serif'],
                serif: ['"Microsoft JhengHei"', '"微軟正黑體"', 'sans-serif'],
                display: ['"Microsoft JhengHei"', '"微軟正黑體"', 'sans-serif'],
            },
            borderRadius: {
                'none': '0',
                'sm': '1px',
                DEFAULT: '2px',
                'md': '3px',
                'full': '9999px',
            },
            colors: {
                primary: {
                    50: '#f0f4f8',
                    100: '#d9e2ec',
                    200: '#bcccdc',
                    300: '#9fb3c8',
                    400: '#829ab1',
                    500: '#627d98',
                    600: '#486581',
                    700: '#334e68',
                    800: '#243b53',
                    900: '#102a43', // Deep Navy
                    950: '#06152a',
                },
                accent: {
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    200: '#99f6e4',
                    300: '#5eead4',
                    400: '#2dd4bf',
                    500: '#14b8a6',
                    600: '#0d9488',
                    700: '#0f766e',
                    800: 'hsla(189, 69%, 23%, 1.00)', // Kept as requested
                    900: '#134e4a',
                    950: '#042f2e',
                },
                gray: slateScale,
                secondary: slateScale,
            },
            animation: {
                'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.8s ease-out 0.3s forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
