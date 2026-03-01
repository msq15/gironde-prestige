tailwind.config = {
    theme: {
        extend: {
            colors: {
                bordeaux: {
                    DEFAULT: '#800020',
                    light: '#9E2A4B',
                    dark: '#520015'
                },
                sand: '#F5F5F4',
                gold: '#D4AF37'
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Outfit"', 'sans-serif'],
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                'soft': '0 20px 40px -15px rgba(0, 0, 0, 0.1)'
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
                slideUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }
            }
        }
    }
}