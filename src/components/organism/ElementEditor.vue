<template>
  <v-navigation-drawer permanent app class="ElementEditor">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Editor
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <h2>Align</h2>
    <v-radio-group v-model="align">
      <v-radio
        v-for="({name, data}, key) in alignSetting" :key="key"
        :label="name"
        :value="data"
      ></v-radio>
    </v-radio-group>


    <TextEditor v-if="currentEditElement.type === ELEMENT_TYPE.TEXT"
      :editElement="currentEditElement" :element="element" />
    <ButtonEditor v-else-if="currentEditElement.type === ELEMENT_TYPE.BUTTON"
      :editElement="currentEditElement" :element="element" />


    <p class="justify-center d-flex"><v-btn @click="deleteElement(currentEditUid)">削除</v-btn></p>
    {{currentEditUid}}
    {{currentEditElement}}
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, Prop, Action, Getter, Mutation } from '@/alias'
import TextEditor from '@/components/organism/TextEditor.vue'
import ButtonEditor from '@/components/organism/ButtonEditor.vue'
import { EditorState } from '@/types/store'
import { TextElement, UnionElement } from '@/types/element'
import { ELEMENT_TYPE, ALIGN_TYPE } from '@/const'

@Component({
  data() {
    return {
      alignSetting: [
        {
          name: 'left',
          data: ALIGN_TYPE.LEFT
        },
        {
          name: 'center',
          data: ALIGN_TYPE.CENTER
        },
        {
          name: 'right',
          data: ALIGN_TYPE.RIGHT
        }
      ]
    }
  },
  components: { TextEditor, ButtonEditor }
})
export default class ElementEditor extends Vue {
  @Getter('element', { namespace: 'editor' })
  private element!: TextElement
  @Getter('currentEditUid', { namespace: 'editor' })
  private currentEditUid!: string
  @Getter('currentEditElement', { namespace: 'editor' })
  private currentEditElement!: UnionElement
  @Mutation('deleteElement')
  private deleteElement!: any

  @Action('updateAlign', { namespace: 'editor' })
  private updateAlign: any
  get align() {
    return this.element.align
  }
  set align(align: string) {
    this.updateAlign(align)
  }

  get ELEMENT_TYPE(): typeof ELEMENT_TYPE {
    return ELEMENT_TYPE
  }
}
</script>
