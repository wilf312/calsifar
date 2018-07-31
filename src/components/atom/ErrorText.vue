<template>
  <div>{{text}}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from '@/alias'

@Component({})
export default class ErrorText extends Vue {
  @Prop(String) public text!: string
  public mounted() {
    console.error(this.text)
  }
}
</script>
