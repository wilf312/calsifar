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

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Footer',
  data: () => ({
    isVisibleForAddElement: false,
    tiles: [
      { title: 'Text' },
      { title: 'Button' },
      { title: 'Select' },
      { title: 'Text' },
      { title: 'Google+' }
    ]
  }),
  components: {},
  props: {
    msg: String
  },
  methods: {
    ...mapActions(['addText'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
