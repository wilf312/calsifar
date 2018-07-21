<template>
  <v-navigation-drawer permanent app class="ElementEditor">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class ElementEditor extends Vue {}
</script>
