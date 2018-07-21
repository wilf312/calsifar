<template>
  <div>
    <Element v-for="(el, key) in element" :key="key"
      :nodes="el" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapState } from 'vuex'
import Element from '@/components/molecule/Element.vue'
import { RootState } from '@/types/store'
import { UnionElement } from '@/types/element'

@Component({
  name: 'Render',
  components: {
    Element
  },
  computed: {
    ...mapState({
      element: (state: RootState): UnionElement[] => state.element
    })
  }
})
export default class Render extends Vue {}
</script>
