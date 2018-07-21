<template>
  <div>{{text}}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'ErrorText'
})
export default class GlobalHeader extends Vue {
  @Prop(String) public text!: string
  public mounted() {
    console.error(this.text)
  }
}
</script>
