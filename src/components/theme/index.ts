import { DefaultTheme } from 'styled-components';

interface ThemeColors {
  primary: string;
  secondary: string;
}

interface CustomTheme {
  name?: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {
    colors: ThemeColors;
    fonts: Array<string>;
    space: Array<number>;
    fontSizes: Array<number>;
    radii: Array<number>;
  }
}

export const lightTheme: DefaultTheme = {
  name: 'light',
  space: [0, 2, 4, 8, 16, 32],
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: [12, 14, 16, 18, 24, 32],
  radii: [0, 2, 4, 8],
};


export const darkTheme: DefaultTheme = {
  name: 'dark',
  space: [0, 2, 4, 8, 16, 32],
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: [12, 14, 16, 18, 24, 32],
  radii: [0, 2, 4, 8],
};
