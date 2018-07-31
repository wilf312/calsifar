<template>
  <Paragraph v-if="elementStatus === ELEMENT_TYPE.TEXT" :nodes="nodes" />
  <Button v-else-if="elementStatus === ELEMENT_TYPE.BUTTON" :nodes="nodes" />
</template>

<script lang="ts">
import { Vue, Component, Prop, Action } from '@/alias'
import Paragraph from '@/components/molecule/Paragraph.vue'
import Button from '@/components/molecule/Button.vue'
import { TextElement } from '@/types/element'
import { ELEMENT_TYPE } from '@/const'

@Component({
  components: {
    Button,
    Paragraph
  }
})
export default class Element extends Vue {
  @Prop(Object)
  public nodes!: TextElement

  get elementStatus(): string {
    return this.nodes.type
  }

  get ELEMENT_TYPE(): typeof ELEMENT_TYPE {
    return ELEMENT_TYPE
  }
}
</script>
