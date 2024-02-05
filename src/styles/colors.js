/**
 * If you add a color here, you will need to add it to `tailwind.config.js` before using it in a className
 */

export const colors = {
    'cursor': '#67e8f9',              // cyan-300 - colour of the cursor
    'accent-1': '#5eead4',            // teal-300 - main accent colour
    'accent-2': '#134e4a',            // teal-900 - darker shade of the accent-1 (used for text selection in index.css ONLY)
    'primary': {
        'bright': '#e2e8f0',          // slate-200 - main text
        'dim': '#64748b',             // slate-500 - dimmer shade of main text
        'dark': '#111827',            // slate-900 - main background
        'hover-bg': '#1e293b',        // slate-800 - background when hovered on an item in a section
    },
    'skills': {
        'bg': '#d1d5db',              // green-300 - background of skill tags
        'text': '#9ca3af',            // green-400 - text of skill tags
    },
    'technologies': {
        'bg': '#5eead4',              // teal-300 - background of technology tags
        'text': '#2dd4bf',            // teal-400 - text of technology tags
    },
}