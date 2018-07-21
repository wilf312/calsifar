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
import { Component, Vue, Prop } from 'vue-property-decorator'
import { mapActions, mapMutations } from 'vuex'
import { TextElement } from '@/types/element'

@Component({
  components: {},
  methods: {
    ...mapActions(['editText']),
    ...mapActions('editor', ['updateText', 'updateParagraphType'])
  }
})
export default class ElementEditor extends Vue {
  @Prop(Object) public element!: TextElement
  @Prop(Object) public editElement!: TextElement
}
</script>
