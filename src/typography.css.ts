import { styleVariants } from '@vanilla-extract/css';
import { createCss } from './utils/capsize';
import { vars } from './theme.css';
import { mapToProperty, responsiveStyle } from './utils/themeUtils';

const makeTypographyRules = (textDefinition: typeof vars.text.body, extraStyles: object) => {
  const {
    fontSize: mobileFontSize,
    lineHeight: mobileLineHeight,
    ...mobileTrims
  } = createCss(textDefinition.mobile);

  const {
    fontSize: tabletFontSize,
    lineHeight: tabletLineHeight,
    ...tabletTrims
  } = createCss(textDefinition.tablet);

  const {
    fontSize: desktopFontSize,
    lineHeight: desktopLineHeight,
    ...desktopTrims
  } = createCss(textDefinition.desktop);

  return {
    base: responsiveStyle({
      mobile: {
        fontSize: mobileFontSize,
        lineHeight: mobileLineHeight,
        ...extraStyles
      },
      tablet: {
        fontSize: tabletFontSize,
        lineHeight: tabletLineHeight,
        ...extraStyles
      },
      desktop: {
        fontSize: desktopFontSize,
        lineHeight: desktopLineHeight,
        ...extraStyles
      },
    }),
    trims: responsiveStyle({
      mobile: mobileTrims,
      tablet: tabletTrims,
      desktop: desktopTrims,
    }),
  };
};

export const font = styleVariants(vars.fonts, mapToProperty('fontFamily'));
export const weight = styleVariants(vars.weight, mapToProperty('fontWeight'));

export const text = {
  body: styleVariants(makeTypographyRules(vars.text.body)),
  small: styleVariants(makeTypographyRules(vars.text.small)),
  xsmall: styleVariants(makeTypographyRules(vars.text.xsmall)),
  // code: styleVariants(makeTypographyRules(vars.text.code)),
  xxlarge: styleVariants(makeTypographyRules(vars.heading.h1)),
  xlarge: styleVariants(makeTypographyRules(vars.heading.h2)),
  large: styleVariants(makeTypographyRules(vars.heading.h3)),
  medium: styleVariants(makeTypographyRules(vars.heading.h4)),
};

export const heading = {
  '1': styleVariants(makeTypographyRules(vars.heading.h1, )),
  '2': styleVariants(makeTypographyRules(vars.heading.h2, { weight: vars.weight.bold})),
  '3': styleVariants(makeTypographyRules(vars.heading.h3, { weight: vars.weight.bold})),
  '4': styleVariants(makeTypographyRules(vars.heading.h4, { weight: vars.weight.bold})),
};
