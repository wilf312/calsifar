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
    <TextEditor :editElement="currentEditElement" :element="element" />
    {{currentEditUid}}
    {{element}}
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters, mapState } from 'vuex'
import TextEditor from '@/components/organism/TextEditor.vue'

@Component({
  components: { TextEditor },
  computed: {
    ...mapState('editor', ['currentEditUid', 'currentEditElement']),
    ...mapGetters('editor', ['element'])
  }
})
export default class ElementEditor extends Vue {}
</script>
