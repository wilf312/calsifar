<template>
  <h1 v-if="nodes.paragraphType === 'h1'" @click="setEditor(nodes.uid)" v-text="nodes.data" />
  <h2 v-else-if="nodes.paragraphType === 'h2'" @click="setEditor(nodes.uid)" v-text="nodes.data" />
  <h3 v-else-if="nodes.paragraphType === 'h3'" @click="setEditor(nodes.uid)" v-text="nodes.data" />
  <h4 v-else-if="nodes.paragraphType === 'h4'" @click="setEditor(nodes.uid)" v-text="nodes.data" />
  <h5 v-else-if="nodes.paragraphType === 'h5'" @click="setEditor(nodes.uid)" v-text="nodes.data" />
  <h6 v-else-if="nodes.paragraphType === 'h6'" @click="setEditor(nodes.uid)" v-text="nodes.data" />
  <p v-else-if="nodes.paragraphType === 'p'" @click="setEditor(nodes.uid)" v-text="nodes.data" />
  <ErrorText v-else text="paragraphType not found"></ErrorText>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { mapActions } from 'vuex'
import ErrorText from '@/components/atom/ErrorText.vue'
import { TextElement } from '@/types/element'

@Component({
  name: 'Paragraph',
  components: {
    ErrorText
  },
  methods: {
    ...mapActions('editor', ['setEditor'])
  }
})
export default class Paragraph extends Vue {
  @Prop(Object) private nodes!: TextElement
}
</script>
