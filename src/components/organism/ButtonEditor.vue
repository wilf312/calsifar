<template>
  <v-container fluid>
    <v-flex>
      <v-text-field
        label="Text"
        placeholder="input text..."
        :value="element.data"
        @input="updateText"
      />
      <v-text-field
        label="Link page"
        placeholder="input text..."
        :value="element.linkTo"
        @input="updateLinkTo"
      />

      colorType
    </v-flex>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import { ButtonElement } from '@/types/element'

@Component({
  components: {}
})
export default class ButtonEditor extends Vue {
  @Prop(Object) public element!: ButtonElement
  @Prop(Object) public editElement!: ButtonElement

  @Action('editText') public editText: any
  @Action('updateText', { namespace: 'editor' })
  private updateText: any

  @Action('updateLinkTo', { namespace: 'editor' })
  private updateLinkTo: any
}
</script>
