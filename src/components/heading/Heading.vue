<template>
  <Text :tag="tag" :class="classes" weight="bold" v-bind="$props">
    <slot></slot>
  </Text>
</template>

<script setup lang="ts">
import classnames from 'classnames'
import * as styles from '../../typography.css'
import {defineProps, computed} from 'vue'
import {atoms, Atoms} from '../../sprinkles.css'
import Text from '../text/Text.vue'


type HeadingLevel = keyof typeof styles.heading;


const props = defineProps<{
  level: HeadingLevel,
  align?: Atoms['textAlign']
}>()

const {
  level,
  align
} = props

const classes = classnames(
    styles.font.heading,
    // atoms({
    //   textAlign: align,
    //   color: { lightMode: 'white', darkMode: 'gray1' },
    // }),
    styles.heading[level].base,
    styles.heading[level].trims,
)

const tag = `h${level}`

</script>
