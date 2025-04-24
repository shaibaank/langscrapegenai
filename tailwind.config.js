/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // indigo
          light: '#818cf8',
          dark: '#4338ca',
        },
        secondary: '#14b8a6', // teal
        text: {
          DEFAULT: '#1f2937', // near black
          light: '#6b7280', // gray
        },
        bg: {
          DEFAULT: '#ffffff', // white
          alt: '#f9fafb', // off-white
        },
        border: '#e5e7eb', // light gray
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '0.25': '0.25rem', // 4px
        '0.5': '0.5rem',   // 8px
        '1': '1rem',       // 16px
        '1.5': '1.5rem',   // 24px
        '2': '2rem',       // 32px
        '3': '3rem',       // 48px
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#1f2937',
            'h1, h2, h3, h4, h5, h6': {
              color: '#1f2937',
              fontWeight: '600',
            },
            h2: {
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '0.5rem',
            },
            a: {
              color: '#6366f1',
              textDecoration: 'none',
              '&:hover': {
                color: '#4338ca',
                textDecoration: 'underline',
              },
            },
            code: {
              color: '#6366f1',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              padding: '0.25rem',
              borderRadius: '0.25rem',
            },
            strong: {
              color: '#1f2937',
              fontWeight: '600',
            },
            blockquote: {
              color: '#6b7280',
              borderLeftColor: '#6366f1',
              fontStyle: 'normal',
            },
            ul: {
              li: {
                '&::marker': {
                  color: '#6366f1',
                },
                marginBottom: '0.5em',
              },
            },
            ol: {
              li: {
                '&::marker': {
                  color: '#6366f1',
                },
                marginBottom: '0.5em',
              },
            },
          },
        },
      },
      animation: {
        'pulse-custom': 'pulse 2s infinite',
        'bounce-custom': 'bounce 1s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        pulse: {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(99, 102, 241, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 15px rgba(99, 102, 241, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(99, 102, 241, 0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'input-focus': '0 0 0 3px rgba(99, 102, 241, 0.2)',
      },
      borderRadius: {
        'card': '8px',
        'input': '6px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addBase, theme }) {
      addBase({
        'html': { backgroundColor: theme('colors.bg.alt') },
        'body': { backgroundColor: theme('colors.bg.alt'), color: theme('colors.text.DEFAULT') },
        '.card': {
          backgroundColor: theme('colors.bg.DEFAULT'),
          borderRadius: theme('borderRadius.card'),
          boxShadow: theme('boxShadow.card'),
          padding: theme('spacing.8'),
        },
      });
    },
  ],
}; 