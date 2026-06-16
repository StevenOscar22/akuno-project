/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            "colors": {
                "surface-dim": "#0b1326",
                "inverse-surface": "#dae2fd",
                "on-primary-fixed-variant": "#004f53",
                "error-container": "#93000a",
                "primary-fixed-dim": "#00dce6",
                "on-tertiary-fixed-variant": "#004e60",
                "outline": "#849495",
                "on-surface-variant": "#b9cacb",
                "outline-variant": "#3a494b",
                "on-primary": "#00373a",
                "on-error-container": "#ffdad6",
                "surface-container": "#171f33",
                "tertiary-fixed-dim": "#47d6ff",
                "secondary": "#9bcbff",
                "on-secondary-container": "#002c4b",
                "on-primary-fixed": "#002022",
                "error": "#ffb4ab",
                "on-primary-container": "#006a70",
                "tertiary-container": "#9ee5ff",
                "secondary-fixed": "#d0e4ff",
                "surface-container-lowest": "#060e20",
                "surface-container-highest": "#2d3449",
                "secondary-container": "#3196e6",
                "surface-variant": "#2d3449",
                "inverse-on-surface": "#283044",
                "surface-bright": "#31394d",
                "surface": "#0b1326",
                "background": "#0b1326",
                "on-surface": "#dae2fd",
                "inverse-primary": "#00696f",
                "on-error": "#690005",
                "on-tertiary-container": "#006880",
                "secondary-fixed-dim": "#9bcbff",
                "on-tertiary-fixed": "#001f28",
                "on-secondary-fixed": "#001d34",
                "surface-tint": "#00dce6",
                "primary-fixed": "#6ff6ff",
                "tertiary": "#edf9ff",
                "on-tertiary": "#003543",
                "on-secondary": "#003256",
                "tertiary-fixed": "#b6ebff",
                "primary": "#e0fdff",
                "surface-container-high": "#222a3d",
                "surface-container-low": "#131b2e",
                "primary-container": "#00f2fe",
                "on-background": "#dae2fd",
                "on-secondary-fixed-variant": "#004a7a"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "unit": "8px",
                "gutter": "1.5rem",
                "card-gap": "2rem",
                "container-padding": "2rem",
                "section-margin": "4rem"
            },
            "fontFamily": {
                "body-md": ["Plus Jakarta Sans"],
                "label-md": ["Plus Jakarta Sans"],
                "headline-md": ["Plus Jakarta Sans"],
                "headline-lg": ["Plus Jakarta Sans"],
                "headline-xl": ["Plus Jakarta Sans"],
                "headline-lg-mobile": ["Plus Jakarta Sans"],
                "label-sm": ["Plus Jakarta Sans"],
                "body-lg": ["Plus Jakarta Sans"]
            },
            "fontSize": {
                "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "label-md": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.02em", "fontWeight": "600" }],
                "headline-md": ["24px", { "lineHeight": "1.4", "fontWeight": "600" }],
                "headline-lg": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                "headline-xl": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "headline-lg-mobile": ["24px", { "lineHeight": "1.3", "fontWeight": "700" }],
                "label-sm": ["12px", { "lineHeight": "1.2", "fontWeight": "500" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }]
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries')
    ],
}
