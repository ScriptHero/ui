import {createAtomicStyles, createAtomsFn} from '@vanilla-extract/sprinkles';
import {fontFace, style} from '@vanilla-extract/css';

export const icons = {
  alert: "'\\e942'",
  back: "'\\e943'",
  calendar: "'\\e944'",
  call: "'\\e945'",
  communication: "'\\e947'",
  download: "'\\e949'",
  gear: "'\\e94a'",
  home: "'\\e94b'",
  location: "'\\e94e'",
  mailOrder: "'\\e94f'",
  mail: "'\\e950'",
  map: "'\\e951'",
  medicationList: "'\\e952'",
  pa: "'\\e954'",
  person: "'\\e955'",
  pharmacyCard: "'\\e956'",
  pharmacy: "'\\e957'",
  phone: "'\\e958'",
  pill: "'\\e959'",
  preferredLocation: "'\\e95b'",
  preferredPharmacies: "'\\e95c'",
  prescription: "'\\e95d'",
  print: "'\\e95e'",
  provider: "'\\e960'",
  question: "'\\e961'",
  reminder: "'\\e962'",
  rxBottle: "'\\e963'",
  search: "'\\e964'",
  settings: "'\\e941'",
  shoppingBag: "'\\e965'",
  speed: "'\\e966'",
  transfer: "'\\e96a'",
  wallet: "'\\e96c'",
  watch: "'\\e96d'",
  star: "'\\e967'",
}

import {colors, vars} from '../../theme.css'

export const sizes = {
  medium: '1.5rem',
  large: '2rem',
}

import shIconsEot from './fonts/sh-icons.eot'

// export const shIconsFontFace = fontFace({
//   src: "url('./fonts/sh-icons.eot')",
//
//   fontWeight: 'normal',
//   fontStyle: 'normal',
//   fontDisplay: 'block'
// })

export const fonts = {
  scripthero: 'sh-icons',
  material: 'Material Icons'
}

const variantStyles = createAtomicStyles({
  properties: {
    '--content': icons,
    '--color': colors,
    '--size': sizes,
    '--family': fonts
  }
});



export const atoms = createAtomsFn(variantStyles);

// It's a good idea to export the Atoms type too
export type Atoms = Parameters<typeof atoms>[0];
