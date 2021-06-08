<template>
  <Box tag="button" :class="classes" :disabled="disabled" :title="title" @click="$emit('click')">
    <slot></slot>
  </Box>
</template>


<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'

import Box from '../box/Box.vue'
import classnames from 'classnames'
import * as styles from './Button.css'


const props = defineProps<{
  type?: 'primary' | 'secondary',
  disabled?: boolean,
  title?: string
}>()

const {
  type = 'primary',
  disabled = false,
  title
} = props

const classes = classnames(
    styles.button,
    type === 'primary' ? styles.contained : undefined,
    type === 'secondary' ? styles.outlined : undefined,
    disabled ? styles.disabled : undefined
)

defineEmit(['click'])

</script>
