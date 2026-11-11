/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)', fg: 'rgb(var(--fg) / <alpha-value>)', muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)', accent: 'rgb(var(--accent) / <alpha-value>)'
      },
      fontFamily: { sans: ['"Geist Variable"', 'system-ui', 'sans-serif'], mono: ['"Geist Mono Variable"', 'ui-monospace', 'monospace'] }
    }
  },
  plugins: []
};
