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
        label="Paragraph type"
        placeholder="h1, p"
        :value="element.paragraphType"
        @input="updateParagraphType"
      />
    </v-flex>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Action } from '@/alias'
import { TextElement } from '@/types/element'

@Component({})
export default class TextEditor extends Vue {
  @Prop(Object)
  public element!: TextElement
  @Prop(Object)
  public editElement!: TextElement

  @Action('editText')
  public editText: any
  @Action('updateText', { namespace: 'editor' })
  private updateText: any
  @Action('updateParagraphType', { namespace: 'editor' })
  private updateParagraphType: any
}
</script>
