<template>
  <Paragraph v-if="elementStatus === 'text'" :nodes="nodes"/>
</template>

<script>
import Paragraph from './Paragraph'
export default {
  name: 'Element',
  components: {
    Paragraph
  },
  props: {
    nodes: Object
  },
  computed: {
    elementStatus() {
      const { type } = this.nodes
      return type
    }
  }
}
</script>
