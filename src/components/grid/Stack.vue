<template>
  <Box display="flex" flexDirection="column" :alignItems="alignItems" class="box-stack">
    <WrapNode
        v-for='(slot, i) in $slots.default()'
        :value="slot"
        :key="i"
        :options="{ paddingBottom: (i !== $slots.default().length - 1 ? space : undefined) }"
    />
  </Box>
</template>


<script setup lang="ts">
import Box from '../box/Box.vue'
import WrapNode from '../wrapper/WrapNode.vue'

import { defineProps } from 'vue'

import { mapResponsiveValue } from '../../sprinkles.css'
import type { ResponsiveValue, Space } from '../../sprinkles.css'


const alignToFlexAlign = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
} as const;


const props = defineProps<{
  space?: Space,
  align?: ResponsiveValue<'left' | 'center' | 'right'>,
}>()


const { align, space = 'none'} = props;

const alignItems = align
    ? mapResponsiveValue(align, (value) => alignToFlexAlign[value])
    : undefined;

</script>
