import { keyframes, style } from '@vanilla-extract/css';

export const ellipses = style({
    position: 'relative'
})

const bounceAnimation = keyframes({
    '0%':   { transform: 'scale(1) translate(0, 0)' },
    '20%':  { transform: 'scale(1) translate(0, -25%)' },
    '40%':  { transform: 'scale(1) translate(0, 0)' },
    '100%': { transform: 'scale(1) translate(0, 0)' },
})

export const circles = style({
    position: 'relative',
    selectors: {
        '&:first-child': {
            animation: `${bounceAnimation} 1s 0.3s infinite`
        },
        '&:nth-child(2)': {
            animation: `${bounceAnimation} 1s 0.4s infinite`
        },
        '&:nth-child(3)': {
            animation: `${bounceAnimation} 1s 0.5s infinite`
        }
    }
})


