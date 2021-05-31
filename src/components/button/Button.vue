<template>
  <Box tag="button" :class="classes">
    <slot></slot>
  </Box>
</template>


<script setup lang="ts">
import { defineProps } from 'vue'

import Box from '../box/Box.vue'
import classnames from 'classnames'
import * as styles from './Button.css'


const props = defineProps<{
  type?: 'primary' | 'secondary'
}>()

const {
  type = 'primary'
} = props

const classes = classnames(
    styles.button,
    type === 'primary' ? styles.contained : undefined,
    type === 'secondary' ? styles.outlined : undefined,
)


</script>
