<template>
  <Box :tag="tag" display="block" :class="classes" v-bind="$props">
    <slot></slot>
  </Box>
</template>

<script setup lang="ts">

import classnames from 'classnames'
import {defineProps} from 'vue'
import Box from '../box/Box.vue'

import {colors} from '../../theme.css'
import * as styles from '../../typography.css'
import {atoms, Atoms} from '../../sprinkles.css'


interface TextStyleProps {
  size: keyof typeof styles.text;
  color: keyof typeof colors;
  weight: keyof typeof styles.weight;
  align: Atoms['textAlign'];
  baseline: boolean;
  type: Exclude<keyof typeof styles.font, 'brand' | 'heading'>;
}

const useTextStyles = ({
                         size = 'body',
                         color = 'primary',
                         weight = 'regular',
                         type = 'body',
                         align,
                         baseline = true,
                       }: TextStyleProps) =>
    classnames(
        styles.font[type],
        styles.text[size].base,
        atoms({color: color, textAlign: align}),
        styles.weight[weight],
    );


const props = defineProps<{
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'label',
  size?: keyof typeof styles.text,
  color?: keyof typeof colorMap,
  weight?: keyof typeof styles.weight,
  align?: Atoms['textAlign'],
  baseline?: boolean,
  type?: Exclude<keyof typeof styles.font, 'brand' | 'heading'>
}>()

const {
  tag = 'span',
  size,
  color,
  weight,
  type,
  align,
  baseline
} = props

const classes = useTextStyles({size, color, weight, type, align, baseline})


</script>
