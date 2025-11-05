import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Light theme palette - optimized for medical device trust & clarity
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8FAFB',
          tertiary: '#F1F5F9',
        },
        text: {
          primary: '#0F172A',
          secondary: '#475569',
          tertiary: '#64748B',
        },
        accent: {
          50: '#EBF8FF',
          100: '#D1EEFC',
          200: '#A7DAFC',
          300: '#7CC4FA',
          400: '#47A3F3',
          500: '#0B7CCC', // Primary accent - hospital/medical blue
          600: '#0969B3',
          700: '#075699',
          800: '#054380',
          900: '#033566',
        },
        success: {
          light: '#D1FAE5',
          DEFAULT: '#10B981',
          dark: '#059669',
        },
        warning: {
          light: '#FEF3C7',
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        border: '#E2E8F0',
        input: '#E2E8F0',
        ring: '#0B7CCC',
        // Shadcn UI compatibility
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0F172A',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#0F172A',
        },
        primary: {
          DEFAULT: '#0B7CCC',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F1F5F9',
          foreground: '#0F172A',
        },
        muted: {
          DEFAULT: '#F1F5F9',
          foreground: '#64748B',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.375rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['2.75rem', { lineHeight: '1.15', fontWeight: '700' }],
        'display-sm': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.06)',
        'button-hover': '0 4px 12px rgba(11, 124, 204, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
