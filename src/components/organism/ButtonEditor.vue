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


      <h2>colorType</h2>
      <v-radio-group v-model="colorType">
        <v-radio
          v-for="(name, key) in THEME_ELEMENT_NAME" :key="key"
          :label="key"
          :value="name"
        ></v-radio>
      </v-radio-group>
    </v-flex>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import { ButtonElement } from '@/types/element'
import { THEME_ELEMENT_NAME } from '@/const'

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

  @Action('updateColorType', { namespace: 'editor' })
  private updateColorType: any

  get THEME_ELEMENT_NAME(): typeof THEME_ELEMENT_NAME {
    return THEME_ELEMENT_NAME
  }

  get colorType() {
    console.log(this.element.colorType)
    return this.element.colorType
  }
  set colorType(colorType: THEME_ELEMENT_NAME) {
    this.updateColorType(colorType)
  }
}
</script>
