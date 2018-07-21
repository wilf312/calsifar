<template>
  <Paragraph v-if="elementStatus === 'text'" :nodes="nodes" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Paragraph from '@/components/molecule/Paragraph.vue'
import { TextElement } from '@/types/element'
@Component({
  name: 'Element',
  components: {
    Paragraph
  }
})
export default class Element extends Vue {
  @Prop(Object) public nodes!: TextElement

  get elementStatus(): string {
    return this.nodes.type
  }
}
</script>
