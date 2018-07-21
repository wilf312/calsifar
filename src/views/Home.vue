<template>
  <v-app>
    <ElementEditor />
    <v-content>
      <GlobalHeader title="calsifar" />
      <v-container fluid>
        <v-flex>
          <Render></Render>
        </v-flex>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Footer from '@/components/organism/Footer.vue'
import Render from '@/components/organism/Render.vue'
import ElementEditor from '@/components/organism/ElementEditor.vue'
import GlobalHeader from '@/components/atom/GlobalHeader.vue'

@Component({
  name: 'App',
  components: {
    Footer,
    Render,
    GlobalHeader,
    ElementEditor
  }
})
export default class Home extends Vue {}
</script>
