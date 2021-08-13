<template>
  <Box :padding="padding" borderColor="gray2" borderWidth="standard" borderRadius="medium">
    <slot></slot>
  </Box>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import classnames from 'classnames'

import type { Space } from '../../sprinkles.css'
import * as styles from './Card.css'

import Box from '../box/Box.vue'

const { padding = 'medium' } = defineProps<{
  padding?: Space,
  active?: boolean,
  outlined?: boolean,
  interactive?: boolean,
  disabled?: boolean
}>()


const classes = classnames(
    styles.card,

)

</script>
