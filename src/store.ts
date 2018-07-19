import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    element: [
      {
        type: 'text',
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: 'h1'
      },
      {
        type: 'text',
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: 'h2'
      },
      {
        type: 'text',
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: 'h3'
      },
      {
        type: 'text',
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: 'h4'
      },
      {
        type: 'text',
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: 'h5'
      },
      {
        type: 'text',
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: 'h6'
      },
      {
        type: 'text',
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: 'p'
      }
    ]
  },
  mutations: {},
  actions: {}
})
