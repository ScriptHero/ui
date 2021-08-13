<template>
  <Box tag="button" :class="classes">
    <Icon :name="icon" color="white"/>
  </Box>
</template>


<script setup lang="ts">
import { defineProps } from 'vue'

import Box from '../box/Box.vue'
import Icon from '../icon/Icon.vue'

import classnames from 'classnames'
import * as styles from './Button.css'


const props = defineProps<{
  icon: 'string'
}>()

const {
  icon
} = props

const classes = classnames(
    styles.button,
    styles.contained,
    styles.icon
)

</script>
