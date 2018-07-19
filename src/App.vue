<template>
  <v-app>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
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
import Nav from './components/Nav'
import Footer from './components/Footer'
import Render from './components/Render'

export default {
  name: 'App',
  components: {
    Main,
    Footer,
    Render,
    Nav
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
