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
      <v-radio-group v-model="align">
        <v-radio
          v-for="({name, data}, key) in alignSetting" :key="key"
          :label="name"
          :value="data"
        ></v-radio>
      </v-radio-group>
    </v-flex>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { mapActions, mapMutations } from 'vuex'
import { TextElement } from '@/types/element'

@Component({
  data() {
    return {
      alignSetting: [
        {
          name: 'left',
          data: 'text-xs-left'
        },
        {
          name: 'center',
          data: 'text-xs-center'
        },
        {
          name: 'right',
          data: 'text-xs-right'
        }
      ]
    }
  },
  components: {},
  methods: {
    ...mapActions(['editText']),
    ...mapActions('editor', [
      'updateText',
      'updateParagraphType',
      'updateAlign'
    ])
  }
})
export default class TextEditor extends Vue {
  @Prop(Object) public element!: TextElement
  @Prop(Object) public editElement!: TextElement

  public change(val: string) {
    console.log(val)
  }
  get align() {
    return this.element.align
  }
  set align(align: string) {
    this.updateAlign(align)
  }
}
</script>
