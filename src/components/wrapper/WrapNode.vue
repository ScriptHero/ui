<script lang="ts">
import { defineComponent, h } from 'vue'

import Box from '../box/Box.vue'

export default defineComponent({
  props: {
    value: {type: [Object, Array], required: true},
    tag: {type: String, default: 'div'},
    options: {
      type: Object, default: () => {
      }
    },
  },
  render() {
    let nodes = this.value
    if (!Array.isArray(nodes)) {
      nodes = [nodes]
    }

    return h(Box, this.options, nodes)
  }
})
</script>
