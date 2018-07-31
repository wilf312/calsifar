<template>
  <div>
    <draggable v-model="elementList">
      <Element v-for="(el, key) in pageElement" :key="key"
      :nodes="el" />
    </draggable>

    <div class="" v-if="pageElement.length === 0">
      <p>no element.</p>
      <p>please add element</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Action, Getter, Mutation } from '@/alias'
import draggable from 'vuedraggable'
import Element from '@/components/molecule/Element.vue'
import { RootState } from '@/types/store'
import { UnionElement } from '@/types/element'

@Component({
  components: {
    Element,
    draggable
  }
})
export default class Render extends Vue {
  @Getter('pageElement') public pageElement!: UnionElement[]
  @Mutation('setOrderNumber') public setOrderNumber!: any

  get elementList() {
    return this.pageElement
  }
  set elementList(list) {
    this.setOrderNumber(list)
  }
}
</script>
