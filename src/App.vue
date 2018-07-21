<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'App',
  components: {}
})
export default class App extends Vue {}
</script>
