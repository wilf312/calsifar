<template>
  <div>
    <Element v-for="(el, key) in element" :key="key"
      :nodes="el" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Element from './molecule/Element'
export default {
  name: 'Render',
  data: () => ({}),
  components: {
    Element
  },
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
  }
}
</script>

<style scoped>
</style>
