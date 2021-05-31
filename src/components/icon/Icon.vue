<template>
  <span class="sh-icon" :class="classes"></span>
</template>
<script lang="ts">

import {atoms, sizes, fonts, icons} from './Icon.css'
import { colors } from '../../theme.css'
import Box from '../box/Box.vue'

import {defineComponent, PropType} from 'vue';


export default defineComponent({
  name: 'Icon',
  components: { Box },
  props: {
    name: {
      type: String as PropType<keyof typeof icons>,
      required: true,
      validator: (value: string) => {
        return Object.keys(icons).includes(value)
      }
    },
    color: {
      type: String as PropType<keyof typeof colors>,
      required: false,
      default: 'secondary'
    },
    fontFamily: {
      required: false,
      type: String as PropType<keyof typeof fonts>,
      default: 'scripthero'
    },
    size: {
      required: false,
      type: String as PropType<keyof typeof sizes>,
      default: 'medium'
    },
  },
  computed: {
    classes() {
      return atoms({
        '--content': this.name,
        '--color': this.color,
        '--family': this.fontFamily,
        '--size': this.size
      })
    }
  },
})
</script>
