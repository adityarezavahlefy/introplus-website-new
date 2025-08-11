module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#1ac8db", // cyan-400 - Brand authority + trust building
        secondary: "#000000", // black - Professional credibility + text hierarchy
        accent: "#6ce5e8", // cyan-300 - CTA power + conversion moments
        background: "#ffffff", // white - Clean canvas for content scanning
        surface: "#f8fafc", // slate-50 - Subtle section separation
        text: {
          primary: "#1f2937", // gray-800 - Maximum readability contrast
          secondary: "#6b7280", // gray-500 - Supporting information hierarchy
        },
        success: "#10b981", // emerald-500 - Revenue numbers + positive metrics
        warning: "#f59e0b", // amber-500 - Urgency elements only
        error: "#ef4444", // red-500 - Form validation feedback
        border: "#e5e7eb", // gray-200 - Form fields and section separators
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'montserrat-semibold': '600',
        'montserrat-bold': '700',
        'montserrat-extrabold': '800',
        'inter-normal': '400',
        'inter-medium': '500',
        'inter-semibold': '600',
      },
      boxShadow: {
        'default': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      animation: {
        'smooth': 'all 250ms ease-in-out',
        'graphics': 'all 300ms ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}