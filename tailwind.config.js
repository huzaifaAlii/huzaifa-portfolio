/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#F5F3F0',
          100: '#EFEFEB',
          200: '#E9E2D9',
          300: '#E7E0D3',
          400: '#E0D9CE',
        },
        navy: {
          900: '#02071E',
          950: '#010410',
        },
        dark: '#191617',
        gold: '#E0C86E',
        accent: '#362FB3',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['Inter', 'DM Sans', 'Manrope', 'sans-serif'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-lg': ['56px', { lineHeight: '1.2', fontWeight: '600' }],
        'heading': ['42px', { lineHeight: '1.2', fontWeight: '600' }],
        'subheading': ['28px', { lineHeight: '1.3', fontWeight: '500' }],
      },
      spacing: {
        'hero': '120px',
        'section': '100px',
      },
      letterSpacing: {
        'tight': '-0.02em',
        'normal': '0em',
        'wide': '0.05em',
      },
    },
  },
  plugins: [],
}
