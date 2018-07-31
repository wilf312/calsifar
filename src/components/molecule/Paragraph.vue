<template>
  <h1 v-if="nodes.paragraphType === PARAGRAPH_TYPE.H1"
    @click="setEditor(nodes.uid)"
    :class="[nodes.align]"
    v-text="nodes.data"
    />
  <h2 v-else-if="nodes.paragraphType === PARAGRAPH_TYPE.H2"
    @click="setEditor(nodes.uid)"
    :class="[nodes.align]"
    v-text="nodes.data"
    />
  <h3 v-else-if="nodes.paragraphType === PARAGRAPH_TYPE.H3"
    @click="setEditor(nodes.uid)"
    :class="[nodes.align]"
    v-text="nodes.data"
    />
  <h4 v-else-if="nodes.paragraphType === PARAGRAPH_TYPE.H4"
    @click="setEditor(nodes.uid)"
    :class="[nodes.align]"
    v-text="nodes.data"
    />
  <h5 v-else-if="nodes.paragraphType === PARAGRAPH_TYPE.H5"
    @click="setEditor(nodes.uid)"
    :class="[nodes.align]"
    v-text="nodes.data"
    />
  <h6 v-else-if="nodes.paragraphType === PARAGRAPH_TYPE.H6"
    @click="setEditor(nodes.uid)"
    :class="[nodes.align]"
    v-text="nodes.data"
    />
  <p v-else-if="nodes.paragraphType === PARAGRAPH_TYPE.P"
    @click="setEditor(nodes.uid)"
    :class="[nodes.align]"
    v-text="nodes.data"
    />
  <ErrorText v-else text="paragraphType not found"></ErrorText>
</template>

<script lang="ts">
import { Vue, Component, Prop, Action } from '@/alias'
import ErrorText from '@/components/atom/ErrorText.vue'
import { TextElement } from '@/types/element'
import { PARAGRAPH_TYPE } from '@/const'

@Component({
  name: 'Paragraph',
  components: {
    ErrorText
  }
})
export default class Paragraph extends Vue {
  @Action('setEditor', { namespace: 'editor' })
  public setEditor: any
  @Prop(Object) private nodes!: TextElement
  @Prop({ default: () => PARAGRAPH_TYPE })
  private PARAGRAPH_TYPE!: PARAGRAPH_TYPE
}
</script>
