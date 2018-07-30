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
    <TextEditor v-if="elementStatus === ELEMENT_TYPE.TEXT"
      :editElement="currentEditElement" :element="element" />
    <TextEditor v-if="elementStatus === ELEMENT_TYPE.BUTTON"
      :editElement="currentEditElement" :element="element" />


    <p class="justify-center d-flex"><v-btn @click="deleteElement(currentEditUid)">削除</v-btn></p>
    {{currentEditUid}}
    {{currentEditElement}}
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters, mapState } from 'vuex'
import { Getter, Mutation } from 'vuex-class'
import TextEditor from '@/components/organism/TextEditor.vue'
import ButtonEditor from '@/components/organism/ButtonEditor.vue'
import { EditorState } from '@/types/store'
import { TextElement, UnionElement } from '@/types/element'
import { ELEMENT_TYPE } from '@/const'

@Component({
  components: { TextEditor }
})
export default class ElementEditor extends Vue {
  @Getter('element', { namespace: 'editor' })
  private element!: TextElement
  @Getter('currentEditUid', { namespace: 'editor' })
  private currentEditUid!: string
  @Getter('currentEditElement', { namespace: 'editor' })
  private currentEditElement!: UnionElement
  @Mutation('deleteElement') private deleteElement!: any

  get ELEMENT_TYPE(): typeof ELEMENT_TYPE {
    return ELEMENT_TYPE
  }
}
</script>
