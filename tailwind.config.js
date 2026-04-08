/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        snake: {
          50:  '#f0fff4',
          100: '#c6f6d5',
          200: '#9ae6b4',
          300: '#68d391',
          400: '#48bb78',
          500: '#38a169',
          600: '#2f855a',
          700: '#276749',
          800: '#22543d',
          900: '#1c4532',
          green: '#00ff88',
          lime:  '#a3ff47',
        },
        dark: {
          950: '#080810',
          900: '#0d0d1a',
          800: '#111120',
          700: '#161626',
          600: '#1e1e30',
          500: '#252540',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-snake': 'linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)',
        'gradient-dark': 'linear-gradient(180deg, #080810 0%, #0d0d1a 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 4s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-20px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
        glow: {
          from: { boxShadow: '0 0 20px #00ff8855' },
          to:   { boxShadow: '0 0 40px #00ff88aa, 0 0 80px #00ff8833' },
        },
      },
      boxShadow: {
        'snake': '0 0 30px rgba(0, 255, 136, 0.3)',
        'snake-lg': '0 0 60px rgba(0, 255, 136, 0.2)',
        'card': '0 4px 40px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
