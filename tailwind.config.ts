import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: {
        50: '#ffeeee',
        100: '#ffdada',
        200: '#ffbbbb',
        300: '#ff8b8b',
        400: '#ff4949',
        500: '#ff1111',
        600: '#ff0000',
        700: '#e70000',
        800: '#be0000',
        900: '#990000',
        950: '#560000',
      },
      secondary: {
        50: '#f7f7f6',
        100: '#e4e5e2',
        200: '#cacbc4',
        300: '#a8aa9e',
        400: '#84877a',
        500: '#6b6d5f',
        600: '#54564b',
        700: '#45473e',
        800: '#3a3b34',
        900: '#2a2b27',
        950: '#1a1b18',
      },
      light: {
        50: '#f7f6f5',
        100: '#edeae8',
        200: '#d9d2cf',
        300: '#c1b6b0',
        400: '#a79690',
        500: '#95807a',
        600: '#89726d',
        700: '#725e5c',
        800: '#5e4f4e',
        900: '#4d4241',
        950: '#292221',
      },
      dark: {
        50: '#f7f7f7',
        100: '#ededed',
        200: '#d9d9d9',
        300: '#c8c8c8',
        400: '#adadad',
        500: '#999999',
        600: '#888888',
        700: '#7b7b7b',
        800: '#676767',
        900: '#545454',
        950: '#363636',    
      },
    }
  },
  plugins: [],
}
export default config
