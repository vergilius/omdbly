const breakpoints = {
  large: '768px',
};

export interface Theme {
  breakpoints: {
    large: string
  },
  mediaQueries: {
    large: string
  },
  size: {
    none: string,
    xxsmall: string,
    xsmall: string,
    small: string,
    default: string,
    medium: string,
    large: string,
    xlarge: string,
    xxlarge: string,
    xxxlarge: string,
  },
  fontFamily: {
    logo: string,
    body: string,
  },
  fontSizes: {
    logo: number,
    body: number,
    headline: number,
  },
  colors: {
    light: string,
    dark: string,
    darkAlt: string,
    blue: string,
    red: string,
  }
};

const theme: Theme = {
  breakpoints,
  mediaQueries: {
    large: `@media screen and (min-width: ${breakpoints.large})`,
  },
  size: {
    none: '0',
    xxsmall: '4px',
    xsmall: '8px',
    small: '10px',
    default: '16px',
    medium: '24px',
    large: '32px',
    xlarge: '48px',
    xxlarge: '64px',
    xxxlarge: '96px',
  },
  fontFamily: {
    logo: '\'Limelight\', cursive',
    body: '\'Open Sans\', sans-serif',
  },
  fontSizes: {
    body: 16,
    headline: 20,
    logo: 64
  },
  colors: {
    light: '#ffffff',
    dark: '#4f506e',
    darkAlt: '#393c54',
    blue: '#1ab3fb',
    red: '#fb5464',
  }
};

export default theme;
