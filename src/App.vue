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

<script>
import Main from './components/Main'
import Footer from './components/Footer'
import Render from './components/Render'
import ElementEditor from './components/organism/ElementEditor'
import GlobalHeader from './components/atom/GlobalHeader'

export default {
  name: 'App',
  components: {
    Main,
    Footer,
    Render,
    GlobalHeader,
    ElementEditor
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'bubble_chart',
          title: 'Inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Calsifar'
    }
  }
}
</script>
