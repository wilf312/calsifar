<template>
  <v-footer app>
    <!-- <v-bottom-sheet v-model="isVisibleForAddElement">
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
    </v-bottom-sheet> -->

    <div>
      <v-btn @click="addText()">text</v-btn>
      <v-btn @click="addButton()">button</v-btn>
    </div>

    <v-spacer />
    <div>
      <v-icon @click="backPage">arrow_back</v-icon>
      <div class="currentPageNum">{{currentPageNum}}</div>
      <v-icon @click="nextPage">arrow_forward</v-icon>
    </div>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component, Prop, Action, Getter } from '@/alias'

@Component({
  components: {}
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
  @Action('changePage') private changePage: any
  @Action('addText') private addText: any
  @Action('addButton') private addButton: any
  @Getter('currentPageNum') private currentPageNum!: number

  public nextPage() {
    this.changePage(this.currentPageNum + 1)
  }
  public backPage() {
    this.changePage(this.currentPageNum - 1)
  }
}
</script>


<style scoped>
.currentPageNum {
  position: relative;
  bottom: 2px;
  font-size: 18px;
  line-height: 20px;
  display: inline-block;
  padding: 0 12px;
}
</style>
