<template>
  <v-toolbar
    class="GlobalHeader"
    app
  >
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from '@/alias'

@Component
export default class GlobalHeader extends Vue {
  @Prop() public title!: string
}
</script>
