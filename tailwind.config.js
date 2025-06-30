/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Backgrounds-Primary": "#fff",
        "Labels-Primary": "#000",
        "border-border-white": "#fff",
        "fg-fg-secondary": "#4f4944",
        "bg-bg-brand-solid": "#c85c50",
        "fg-fg-white": "#fff",
        "fg-fg-brand-secondary": "#c85c50",
        "bg-bg-tertiary": "#f1f0ef",
        "fg-fg-disabled": "#cac6c3",
        "bg-bg-primary": "#fff",
        "border-border-secondary": "#e5e3e1",
        "fg-fg-primary": "#27211b",
        "bg-bg-brand-secondary": "#f4dedc",
      },
      spacing: {
        "spacing-spacing-sm": "12px",
        "spacing-spacing-md": "16px",
        "spacing-spacing-xs": "8px",
        "icon-sizing-icon-sizing-sm": "20px",
        "spacing-spacing-2xs": "4px",
        "spacing-spacing-xl": "24px",
        "spacing-spacing-2xl": "32px",
        "spacing-spacing-none": "0px",
        "icon-sizing-icon-sizing-md": "24px",
      },
      borderRadius: {
        "radius-radius-full": "999px",
        "radius-radius-md": "8px",
        "radius-radius-lg": "12px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
