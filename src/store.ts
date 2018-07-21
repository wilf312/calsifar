import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import uuid from 'uuid'
import { RootState } from '@/types/store'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    currentPage: { type: 'page', pageNum: 1 },
    currentEditUid: '',
    element: [
      {
        type: 'text',
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: 'h1',
        uid: uuid.v4()
      },
      {
        type: 'text',
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: 'h2',
        uid: uuid.v4()
      },
      {
        type: 'text',
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: 'h3',
        uid: uuid.v4()
      },
      {
        type: 'text',
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: 'h4',
        uid: uuid.v4()
      },
      {
        type: 'text',
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: 'h5',
        uid: uuid.v4()
      },
      {
        type: 'text',
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: 'h6',
        uid: uuid.v4()
      },
      {
        type: 'text',
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: 'p',
        uid: uuid.v4()
      }
    ]
  },
  mutations: {
    addText(state) {
      state.element.push({
        type: 'text',
        data: 'please edit text',
        paragraphType: 'p',
        uid: uuid.v4()
      })
    },
    editText(state, updateText) {
      state.element = state.element.map(d => {
        if (d.uid === updateText.uid) {
          return {
            ...updateText
          }
        } else {
          return d
        }
      })
    },
    deleteText(state, targetUid: string) {
      state.element = [...state.element.filter(({ uid }) => uid !== targetUid)]
    },
    setEditor(state, uid: string) {
      state.currentEditUid = uid
    }
  },
  actions: {
    addText({ commit }) {
      commit('addText')
    }
  },
  modules: {}
}

export default new Vuex.Store<RootState>(store)
