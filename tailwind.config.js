module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        accent: '#7C3AED', // Purple
        text: '#FFFFFF',
        faded: 'rgba(255,255,255,0.6)',
      },
      animation: {
        orbit: 'orbit 20s linear infinite',
        shooting: 'shooting 2s ease-in-out infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shooting: {
          '0%': { opacity: 0, transform: 'translateX(0)' },
          '50%': { opacity: 1, transform: 'translateX(100px)' },
          '100%': { opacity: 0, transform: 'translateX(200px)' },
        },
      },
    },
  },
  plugins: [],
}