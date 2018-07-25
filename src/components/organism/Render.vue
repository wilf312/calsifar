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
    <v-btn @click="() => { this.changePage(2) }">次のページ(固定で2へ移動する)</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapGetters, mapActions } from 'vuex'
import draggable from 'vuedraggable'
import Element from '@/components/molecule/Element.vue'
import { RootState } from '@/types/store'
import { UnionElement } from '@/types/element'
import { Getter, Action, Mutation } from 'vuex-class'

@Component({
  name: 'Render',
  components: {
    Element,
    draggable
  }
})
export default class Render extends Vue {
  @Getter('pageElement') public pageElement!: UnionElement[]
  @Action('changePage') public changePage!: any
  @Mutation('setOrderNumber') public setOrderNumber!: any

  get elementList() {
    return this.pageElement
  }
  set elementList(list) {
    this.setOrderNumber(list)
  }
}
</script>
