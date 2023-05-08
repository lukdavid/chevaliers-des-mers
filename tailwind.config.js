/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,astro}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 120s linear infinite",
        float: "float 10s ease-in-out infinite",
        "custom-bounce": "customBounce 2s ease-in-out infinite",
        swim: "swim 20s ease-in-out infinite",
        "swim-reverse": "swimReverse 20s ease-in-out infinite",
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        "surface-blue": "#004a9a",
        "abyss-blue": "#020024",
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    keyframes: {
      float: {
        "0%": {
          transform: "translatey(0px) rotate(0deg)",
        },
        "50%": {
          transform: "translatey(-30px) rotate(2deg)",
        },

        "100%": {
          transform: "translatey(0px) rotate(0deg)",
        },
      },
      customBounce: {
        "0%, 50%, 100%": {
          transform: "translateY(0)",
        },
        "25%": {
          transform: "translateY(-5px)",
        },
        "75%": {
          transform: "translateY(-3px)",
        },
      },
      swim: {
        "0%": {
          marginLeft: "-235px",
        },

        "100%": {
          marginLeft: "120%",
        },
      },
      swimReverse: {
        "0%": {
          marginRight: "-235px",
        },
        "70%": {
          marginRight: "100%",
        },
        "100%": {
          marginRight: "150%",
        },
      },
      spin: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
    },
  },

  plugins: ["flowbite/plugin"],
};
