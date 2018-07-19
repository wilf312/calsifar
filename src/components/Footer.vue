<template>
  <v-footer>
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
          @click="isVisibleForAddElement = false"
        >
          <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </v-footer>
</template>

<script>
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
