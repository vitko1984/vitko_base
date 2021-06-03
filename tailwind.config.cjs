const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

module.exports = {
  purge: {
    content: [
			"./src/**/*.{html,js,svelte, vue,ts}",
		],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
			keyframes: true,
		},
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    zIndex: {
      '0': 0,
     '10': 10,
     '20': 20,
     '30': 30,
     '40': 40,
     '50': 50,
     '25': 25,
     '50': 50,
     '75': 75,
     '100': 100,
      'auto': 'auto',
    },
    boxShadow: {
      'menu': '0px 2px 4px rgba(0, 0, 0, 0.08), inset 0px 4px 0px #333333',
      'sub': '0px 1px 2px rgba(0, 0, 0, 0.05)',
      'btns': '0px 0px 0px rgba(0, 0, 0, 0), inset 0px -2px 0px #1b7afa'
    },
    extend: {
      zIndex: {
        '-2': '-2',
       },
       transitionProperty: {
        'max-height': 'max-height',
       },
       backdropBlur: {
        sm: '6px',
      } 
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
      backdropFilter: ['hover', 'focus'],
    },
  },
  plugins: [],
}
