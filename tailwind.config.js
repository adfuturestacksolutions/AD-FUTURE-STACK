/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E1116',
          surface: '#161B22',
          line: '#242B36',
        },
        signal: {
          violet: '#7C5CFC',
          amber: '#FFB020',
        },
        fog: '#AEB6C2',
        paper: '#F5F6F8',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(180deg, rgba(124,92,252,0.08) 0%, rgba(14,17,22,0) 60%)',
      },
      keyframes: {
        stackUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'stack-up': 'stackUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'pulse-line': 'pulseLine 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
