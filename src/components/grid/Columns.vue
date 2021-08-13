<template>
  <Box display="flex"
       :flexDirection="flexDirection"
       :alignItems="alignItems"
       :marginLeft="marginLeft"
       :marginTop="marginTop"
  >
    <WrapNode
        v-for='(slot, i) in $slots.default()'
        :value="slot"
        :key="i"
        :options="columnOptions"
    />
  </Box>
</template>


<script setup lang="ts">
import WrapNode from '../wrapper/WrapNode.vue'
import Box from '../box/Box.vue'
import { defineProps, h } from 'vue'
import { mapResponsiveValue } from '../../sprinkles.css'

import type { ResponsiveValue, Space } from '../../sprinkles.css'

const props = defineProps<{
  space: Space,
  collapseOnMobile?: boolean,
  collapseOnTablet?: boolean,
  reverseX?: boolean,
  alignY?: ResponsiveValue<'top' | 'center' | 'bottom'>;
}>()


const {
  space = 'none',
  collapseOnMobile = false,
  collapseOnTablet = false,
  reverseX = false,
  alignY = 'top',
} = props


const alignYToFlexAlign = {
  top: 'flex-start',
  bottom: 'flex-end',
  center: 'center',
} as const;

const negate = (space: Space) =>
    space === 'none' ? ('none' as const) : (`-${space}` as const);

const row = reverseX ? 'row-reverse' : 'row';

const flexDirection = collapseOnMobile || collapseOnTablet ? {
  mobile: 'column',
  tablet: collapseOnTablet ? 'column' : row,
  desktop: row,
} : undefined


const alignItems = alignY
    ? mapResponsiveValue(alignY, (value) => alignYToFlexAlign[value])
    : undefined

const marginLeft = collapseOnMobile || collapseOnTablet
    ? ({
      mobile: 'none',
      tablet: collapseOnTablet ? 'none' : negate(space),
      desktop: negate(space),
    } as const)
    : negate(space)

const marginTop = collapseOnMobile || collapseOnTablet
    ? {
      mobile: negate(space),
      tablet: collapseOnTablet ? negate(space) : 'none',
      desktop: 'none',
    }
    : undefined


// Column options
const paddingLeft = collapseOnMobile || collapseOnTablet
    ? {
      mobile: 'none',
      tablet: collapseOnTablet ? 'none' : space,
      desktop: space,
    }
    : space

const paddingTop = collapseOnMobile || collapseOnTablet
    ? {
      mobile: space,
      tablet: collapseOnTablet ? space : 'none',
      desktop: 'none',
    }
    : undefined

const columnOptions = {
  style: { width: '100%', minWidth: 0 },
  paddingLeft,
  paddingTop
}

</script>
