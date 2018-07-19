<template>
  <div v-html="renderer" />
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Render',
  data: () => ({}),
  computed: {
    ...mapState({
      element: state => state.element
    }),
    renderer() {
      return this.createView(this.element)
    }
  },
  methods: {
    createView(element) {
      return element
        .map(d => {
          return this.createElement(d)
        })
        .join('')
    },
    createElement(element) {
      switch (element.type) {
        case 'text':
          return this.createText(element)
        case 'button':
          return this.createButton(element)
      }
    },
    createText(element) {
      return `<${element.paragraphType}>${element.data}</${
        element.paragraphType
      }>`
    }
  },
  components: {}
}
</script>

<style scoped>
</style>
