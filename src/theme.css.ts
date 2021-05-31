import { createGlobalTheme } from '@vanilla-extract/css';
import { computeValues } from './utils/capsize';
import { Breakpoint } from './utils/themeUtils';

const grid = 4;
const px = (value: string | number) => `${value}px`;

const fontMetrics = {
  sofiaPro: {
    capHeight: 689,
    ascent: 1138,
    descent: -302,
    lineGap: 0,
    unitsPerEm: 1000
  },
  code: {
    capHeight: 700,
    ascent: 1060,
    descent: -320,
    lineGap: 0,
    unitsPerEm: 1000,
  },
};

const colorNames = {
  red: '#bb0000',
  white: '#fff',
  black: '#000',
  dark1: '#192352',
  dark2: '#464e73',
  dark3: '#757a98',
  gray1: '#a1a6b9',
  gray2: '#d0d3dc',
  gray3: '#e7e8ed',
  gray4: '#f6f6f8',
  lightBlue: '#186ed8',
  lightBlueHover: '#1665c5',
  orange1: '#fb5f49',
  orange2: '#ef7e6c',
  orange3: '#f6ccb6',
  orange4: '#fae6db',
  orange5: '#fcf2ed',
  green1: '#009e8e',
  greenSecondary: '#80d3ca',
};


export const colors = {
  primary: '#192352',
  primary2: '#464e73',
  primary3: '#757a98',
  primary4: '#a1a6b9',
  primary5: '#d0d3dc',
  primary6: '#e7e8ed',
  primary7: '#f6f6f8',
  link: '#186ed8',
  secondary: '#fb5f49',
  secondary2: '#ef7e6c',
  secondary3: '#f6ccb6',
  secondary4: '#fae6db',
  secondary5: '#fcf2ed',
  tertiary: '#009e8e',
  tertiary2: '#80d3ca',
  ...colorNames,
}


const timings = {
  duration75: '0.075s',
  duration100: '0.1s',
  duration150: '0.15s',
  duration200: '0.2s',
  duration250: '0.25s',
  duration300: '0.3s',
  duration500: '0.5s',
}


const calculateTypographyStyles = (
  definition: Record<Breakpoint, { fontSize: number; lineHeight: number }>,
  type: keyof typeof fontMetrics,
) => {
  const mobile = computeValues({
    fontSize: definition.mobile.fontSize,
    leading: definition.mobile.rows * grid,
    fontMetrics: fontMetrics[type],
  });

  const tablet = computeValues({
    fontSize: definition.tablet.fontSize,
    leading: definition.tablet.rows * grid,
    fontMetrics: fontMetrics[type],
  });

  const desktop = computeValues({
    fontSize: definition.desktop.fontSize,
    leading: definition.desktop.rows * grid,
    fontMetrics: fontMetrics[type],
  });

  return {
    mobile: {
      fontSize: mobile.fontSize,
      lineHeight: mobile.lineHeight,
      capHeightTrim: mobile.capHeightTrim,
      baselineTrim: mobile.baselineTrim,
    },
    tablet: {
      fontSize: tablet.fontSize,
      lineHeight: tablet.lineHeight,
      capHeightTrim: tablet.capHeightTrim,
      baselineTrim: tablet.baselineTrim,
    },
    desktop: {
      fontSize: desktop.fontSize,
      lineHeight: desktop.lineHeight,
      capHeightTrim: desktop.capHeightTrim,
      baselineTrim: desktop.baselineTrim,
    },
  };
};

export const vars = createGlobalTheme(':root', {
  fonts: {
    body: 'sofia-pro, sans-serif;',
    heading: 'sofia-pro, sans-serif;',
    code: 'MonoLisa, "Roboto Mono", Menlo, monospace',
  },
  grid: px(grid),
  spacing: {
    none: '0',
    xsmall: px(1 * grid),
    small: px(2 * grid),
    medium: '1rem',
    large: px(5 * grid),
    xlarge: px(8 * grid),
    xxlarge: px(12 * grid),
    xxxlarge: px(24 * grid),
  },
  contentWidth: {
    xsmall: px(480),
    small: px(600),
    standard: px(740),
    large: px(1350),
  },
  heading: {
    h1: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 45,
          rows: 12,
        },
        tablet: {
          fontSize: 90,
          rows: 25,
        },
        desktop: {
          fontSize: 90,
          rows: 25,
        },
      },
      'sofiaPro',
    ),
    h2: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 30,
          rows: 9,
        },
        tablet: {
          fontSize: 48,
          rows: 13,
        },
        desktop: {
          fontSize: 48,
          rows: 13,
        },
      },
      'sofiaPro',
    ),
    h3: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 24,
          rows: 8,
        },
        tablet: {
          fontSize: 30,
          rows: 10,
        },
        desktop: {
          fontSize: 30,
          rows: 10,
        },
      },
      'sofiaPro',
    ),
    h4: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 22,
          rows: 8,
        },
        tablet: {
          fontSize: 22,
          rows: 9,
        },
        desktop: {
          fontSize: 22,
          rows: 9,
        },
      },
      'sofiaPro',
    ),
  },
  text: {
    body: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 16,
          rows: 5,
        },
        tablet: {
          fontSize: 16,
          rows: 5,
        },
        desktop: {
          fontSize: 16,
          rows: 5,
        },
      },
      'sofiaPro',
    ),
    menu: {
      mobile: {
        fontSize: 18,
        rows: 6
      },
      tablet: {
        fontSize: 18,
        rows: 6
      },
      desktop: {
        fontSize: 18,
        rows: 6
      }
    },
    button: {
      mobile: {
        fontSize: 16,
        rows: 6
      },
      tablet: {
        fontSize: 16,
        rows: 6
      },
      desktop: {
        fontSize: 16,
        rows: 6
      }
    },
    small: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 14,
          rows: 5,
        },
        tablet: {
          fontSize: 14,
          rows: 5,
        },
        desktop: {
          fontSize: 14,
          rows: 5,
        },
      },
      'sofiaPro',
    ),
    xsmall: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 12,
          rows: 5,
        },
        tablet: {
          fontSize: 12,
          rows: 5,
        },
        desktop: {
          fontSize: 12,
          rows: 5,
        },
      },
      'sofiaPro',
    ),
  },
  weight: {
    xxlight: '100',
    xlight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
    xbold: '900'
  },
  animation: {
    short: timings.duration100,
    medium: {
      in: timings.duration250,
      out: timings.duration200,
    },
    long: {
      in: timings.duration300,
      out: timings.duration250,
    }
  },
  duration: timings,
  colors: colors,
  fontSize: {
    xs: '0.75rem',
    s: '0.875rem',
    m: '1rem',
    m2: '1.25rem',
    l: '1.375rem',
    xl: '1.625rem',
    xxl: '1.875rem',
    xxxl: '3rem',
    xxxxl: '5.625rem',
  },
  border: {
    width: {
      standard: px(1 * grid),
      large: px(2 * grid),
    },
    radius: {
      circle: '50%',
      small: '0.125rem',
      medium: '0.25rem',
      large: '0.5rem',
      xlarge: '1rem',
      xxlarge: '2rem'
    },
  },
});
