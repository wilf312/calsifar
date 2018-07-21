<template>
  <v-navigation-drawer permanent app class="ElementEditor">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Editor
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    {{currentEditUid}}
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters, mapState } from 'vuex'

@Component({
  components: {},
  computed: {
    ...mapState(['currentEditUid'])
  }
})
export default class ElementEditor extends Vue {}
</script>
