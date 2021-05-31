import mapValues from 'lodash/mapValues';
import {
  createAtomicStyles,
  createAtomsFn,
  createMapValueFn,
  createNormalizeValueFn,
  ConditionalValue,
} from '@vanilla-extract/sprinkles'
import { calc } from '@vanilla-extract/css-utils';
import { breakpoints } from './utils/themeUtils';
import { vars } from './theme.css';

const space = vars.spacing;
export type Space = keyof typeof space;

const negativeSpace = {
  ['-xsmall']: `${calc(space.xsmall).negate()}`,
  ['-small']: `${calc(space.small).negate()}`,
  ['-medium']: `${calc(space.medium).negate()}`,
  ['-large']: `${calc(space.large).negate()}`,
  ['-xlarge']: `${calc(space.xlarge).negate()}`,
  ['-xxlarge']: `${calc(space.xxlarge).negate()}`,
  ['-xxxlarge']: `${calc(space.xxxlarge).negate()}`,
};

const margins = {
  ...space,
  ...negativeSpace,
};

const contentWidth = {
  xsmall: '480px',
  small: '600px',
  standard: '740px',
  large: '1350px',
}


const responsiveStyles = createAtomicStyles({
  conditions: mapValues(breakpoints, (bp) =>
    bp === 0 ? {} : { '@media': `screen and (min-width: ${bp}px)` },
  ),
  defaultCondition: 'mobile',
  properties: {
    position: ['absolute', 'relative', 'fixed'],
    display: ['none', 'block', 'inline', 'inline-block', 'flex'],
    alignItems: ['flex-start', 'center', 'flex-end'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: margins,
    marginBottom: margins,
    marginLeft: margins,
    marginRight: margins,
    pointerEvents: ['none', 'auto'],
    opacity: [0, 1],
    textAlign: ['left', 'center'],
    maxWidth: contentWidth,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
})

const colorStyles = createAtomicStyles({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' }
  },
  defaultCondition: 'lightMode',
  properties: {
    color: vars.colors,
    background: vars.colors,
    borderColor: vars.colors,
    // etc.
  }
});

const unresponsiveStyles = createAtomicStyles({
  properties: {
    flexWrap: ['wrap', 'nowrap'],
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
    flexShrink: [0],
    flexGrow: [0, 1],
    zIndex: [-1, 0, 1],
    width: { full: '100%' },
    borderWidth: { standard: '1px', large: '2px' },
    borderStyle: ['solid'] ,
    borderRadius: space,
    cursor: ['pointer'],
    fontWeight: { light: '300', regular: '400', bold: '700'}
  },
});


export const mapResponsiveValue = createMapValueFn(responsiveStyles);
export const normalizeResponsiveValue = createNormalizeValueFn(
  responsiveStyles,
);

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveStyles,
  Value
  >;

export const atoms = createAtomsFn(
  responsiveStyles,
  colorStyles,
  unresponsiveStyles
);

// It's a good idea to export the Atoms type too
export type Atoms = Parameters<typeof atoms>[0];
