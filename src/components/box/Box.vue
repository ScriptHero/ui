<template>
  <component :is="tag" :class="atomClasses">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">

import { atoms } from '../../sprinkles.css'
import type { Atoms } from '../../sprinkles.css'
import * as resetStyles from '../../reset.css'
import classnames from 'classnames'

import {defineProps, withDefaults } from 'vue'

interface BoxProps extends Omit<Atoms, 'reset'> {
  tag?: HTMLElement,
  class?: string
}

const props = defineProps<BoxProps>();

const {
  tag = 'div',
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginX,
  marginY,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  display,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  flexGrow,
  flexShrink,
  borderRadius,
  borderColor,
  borderWidth,
  position,
  top,
  bottom,
  left,
  right,
  background,
  color,
  width,
  zIndex,
  opacity,
  pointerEvents,
  cursor,
  textAlign,
  maxWidth,
  fontWeight
} = props

const atomClasses = classnames(
    resetStyles.base,
    resetStyles.element[tag as keyof typeof resetStyles.element],
    atoms({
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      display,
      alignItems,
      justifyContent,
      flexDirection,
      flexWrap,
      flexGrow,
      flexShrink,
      borderRadius,
      borderColor,
      borderWidth,
      borderStyle: borderWidth ? 'solid' : undefined,
      position,
      top,
      bottom,
      left,
      right,
      background,
      color,
      width,
      zIndex,
      opacity,
      pointerEvents,
      cursor,
      textAlign,
      maxWidth,
      fontWeight
    }),
    props.class
)

</script>
