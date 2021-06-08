<template>
  <svg :class="ellipsesClasses" :width="15" :height="15 / 2" viewBox="0 0 18 7">
    <circle :class="circleClasses" style="fill: black" cx="3" cy="4" r="2" />
    <circle :class="circleClasses" style="fill: black" cx="9" cy="4" r="2" />
    <circle :class="circleClasses" style="fill: black" cx="15" cy="4" r="2" />
  </svg>
</template>

<script setup lang="ts">
import * as styles from './LoadingIndicator.css'
import classnames from "classnames";

const ellipsesClasses = classnames(styles.ellipses)
const circleClasses = classnames(styles.circles)

</script>
