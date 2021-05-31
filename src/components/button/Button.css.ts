import { style } from '@vanilla-extract/css';
import { vars } from '../../theme.css'


export const button = style({
  alignItems: 'center',
  border: 'none',
  borderRadius: vars.border.radius.xxlarge,
  boxShadow: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  fontSize: vars.fontSize.m,
  fontWeight: vars.weight.bold,
  justifyContent: 'center',
  margin: '0.3rem 0',
  maxWidth: '100%',
  padding: '0.75rem 1rem',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  fontFamily: vars.fonts.body,
  transition: 'box-shadow .1s ease',
  verticalAlign: 'middle',
  width: '17.5rem',
  ':active': {
    boxShadow: '0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)',
    ':after': {
      backgroundSize: '100% 100%',
      transition: 'background-size 0s'
    }
  },
  ':focus': {
    outline: 'none',
  },
  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 'inherit',
    opacity: 0,
  },
  ':after': {
    transition: 'opacity 1s, background-size 0.5s',
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 'inherit',
    opacity: 0,
  },
  ':active::after': {
      backgroundSize: '100% 100%',
      transition: 'background-size 0s'
    }

});

export const contained = style({
  color: vars.colors.white,
  backgroundColor: vars.colors.secondary,
  ':before': {
    backgroundColor: vars.colors.white,
    transition: 'opacity 0.25s'
  },
  ':after': {
    background: `radial-gradient(circle at center, ${vars.colors.primary} 1%, transparent 1%) center/10000% 10000% no-repeat`
  },
  ':active::after': {
    opacity: '0.32'
  }
})

export const outlined = style({
  color: vars.colors.primary,
  border: 'solid 1px',
  borderColor: vars.colors.secondary,
  backgroundColor: 'transparent'
})

export const icon = style({
  display: 'flex',
  justifyContent: 'center',
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '1.25rem',
  fontSize: '1.625rem',
  lineHeight: '2.5rem',
  textAlign: 'center',
  background: vars.colors.secondary,
  transform: 'matrix(-1, 0, 0, 1, 0, 0)'
})
