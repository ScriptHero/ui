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

import {defineProps} from 'vue'

const props = defineProps<{
  tag?: HTMLElement,
  class?: string,
  padding?: typeof Atoms['padding'],
  paddingX?: typeof Atoms['paddingX'],
  paddingY?: typeof Atoms['paddingY'],
  paddingTop?: typeof Atoms['paddingTop'],
  paddingBottom?: typeof Atoms['paddingBottom'],
  paddingLeft?: typeof Atoms['paddingLeft'],
  paddingRight?: typeof Atoms['paddingRight'],
  margin?: typeof Atoms['margin'],
  marginX?: typeof Atoms['marginX'],
  marginY?: typeof Atoms['marginY'],
  marginTop?: typeof Atoms['marginTop'],
  marginBottom?: typeof Atoms['marginBottom'],
  marginLeft?: typeof Atoms['marginLeft'],
  marginRight?: typeof Atoms['marginRight'],
  display?: typeof Atoms['display'],
  alignItems?: typeof Atoms['alignItems'],
  justifyContent?: typeof Atoms['justifyContent'],
  flexDirection?: typeof Atoms['flexDirection'],
  flexWrap?: typeof Atoms['flexWrap'],
  flexGrow?: typeof Atoms['flexGrow'],
  flexShrink?: typeof Atoms['flexShrink'],
  borderRadius?: typeof Atoms['borderRadius'],
  borderColor?: typeof Atoms['borderColor'],
  borderWidth?: typeof Atoms['borderWidth'],
  position?: typeof Atoms['position'],
  top?: typeof Atoms['top'],
  bottom?: typeof Atoms['bottom'],
  left?: typeof Atoms['left'],
  right?: typeof Atoms['right'],
  background?: typeof Atoms['background'],
  color?: typeof Atoms['color'],
  width?: typeof Atoms['width'],
  zIndex?: typeof Atoms['zIndex'],
  opacity?: typeof Atoms['opacity'],
  pointerEvents?: typeof Atoms['pointerEvents'],
  cursor?: typeof Atoms['cursor'],
  textAlign?: typeof Atoms['textAlign'],
  maxWidth?: typeof Atoms['maxWidth'],
  fontWeight?: typeof Atoms['fontWeight']
}>();

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
