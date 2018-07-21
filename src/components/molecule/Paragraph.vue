<template>
  <h1 v-if="nodes.paragraphType === 'h1'" v-text="nodes.data" />
  <h2 v-else-if="nodes.paragraphType === 'h2'" v-text="nodes.data" />
  <h3 v-else-if="nodes.paragraphType === 'h3'" v-text="nodes.data" />
  <h4 v-else-if="nodes.paragraphType === 'h4'" v-text="nodes.data" />
  <h5 v-else-if="nodes.paragraphType === 'h5'" v-text="nodes.data" />
  <h6 v-else-if="nodes.paragraphType === 'h6'" v-text="nodes.data" />
  <p v-else-if="nodes.paragraphType === 'p'" v-text="nodes.data" />
  <ErrorText v-else text="paragraphType not found"></ErrorText>
</template>

<script>
import ErrorText from '../atom/ErrorText'
export default {
  name: 'Paragraph',
  components: {
    ErrorText
  },
  props: {
    nodes: Object
  }
}
</script>
