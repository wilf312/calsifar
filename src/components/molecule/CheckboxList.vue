<template>
  <v-flex
    @click="setEditor(nodes.uid, nodes.type)"
    :class="[nodes.align]"
    >
    チェックボックス
  </v-flex>
  <!-- <ErrorText v-else text="paragraphType not found"></ErrorText> -->
</template>

<script lang="ts">
import { Vue, Component, Prop, Action } from '@/alias'
import { ButtonElement } from '@/types/element'

@Component({})
export default class Button extends Vue {
  @Action('setEditor', { namespace: 'editor' })
  public setEditor!: any
  @Prop(Object)
  private nodes!: ButtonElement
  @Action('changePage')
  private changePage: any
}
</script>
