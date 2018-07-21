<template>
  <v-footer app>
    <v-bottom-sheet v-model="isVisibleForAddElement">
      <v-btn
        slot="activator"
        color="red"
        dark
      >
        add Element
      </v-btn>

      <v-list>
        <v-subheader>Add</v-subheader>
        <v-list-tile
          v-for="(tile, index) in tiles"
          :key="index"
          @click="addText()"
        >
          <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
        </v-list-tile>
        <v-btn @click="isVisibleForAddElement = false">close</v-btn>
      </v-list>
    </v-bottom-sheet>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { mapActions } from 'vuex'

@Component({
  name: 'Footer',
  components: {},
  methods: {
    ...mapActions(['addText'])
  }
})
export default class Footer extends Vue {
  private isVisibleForAddElement = false
  private tiles = [
    { title: 'Text' },
    { title: 'Button' },
    { title: 'Select' },
    { title: 'Text' },
    { title: 'Google+' }
  ]
}
</script>
