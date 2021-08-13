<template>
  <Box tag="hr" :class="classes"/>
</template>

<script setup lang="ts">
import Box from '../box/Box.vue'
import classnames from 'classnames'
import * as styles from './Divider.css'


const classes = classnames(
    styles.divider
)
</script>
