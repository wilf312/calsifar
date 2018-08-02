import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import uuid from 'uuid'
import { RootState } from '@/types/store'
import { TextElement, UnionElement } from '@/types/element'
import { editor } from './editor'
import {
  PARAGRAPH_TYPE,
  VERSION,
  THEME_ELEMENT_NAME,
  ELEMENT_TYPE,
  ALIGN_TYPE
} from '@/const'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    currentPage: { type: 'page', pageNum: 1 },
    element: [
      {
        type: ELEMENT_TYPE.CHECKBOX,
        dataList: [
          {
            name: 'radio 1',
            checked: true
          },
          {
            name: 'radio 2',
            checked: false
          },
          {
            name: 'radio 3',
            checked: false
          }
        ],
        align: ALIGN_TYPE.LEFT,
        uid: uuid.v4(),
        page: 1
      },
      {
        type: ELEMENT_TYPE.BUTTON,
        data: 'test',
        colorType: THEME_ELEMENT_NAME.PRIMARY,
        align: ALIGN_TYPE.LEFT,
        linkTo: 3,
        uid: uuid.v4(),
        page: 1
      },
      {
        type: ELEMENT_TYPE.TEXT,
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: PARAGRAPH_TYPE.H1,
        align: ALIGN_TYPE.LEFT,
        uid: uuid.v4(),
        page: 1
      },
      {
        type: ELEMENT_TYPE.TEXT,
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: PARAGRAPH_TYPE.H2,
        align: ALIGN_TYPE.LEFT,
        uid: uuid.v4(),
        page: 1
      },
      {
        type: ELEMENT_TYPE.TEXT,
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: PARAGRAPH_TYPE.H3,
        align: ALIGN_TYPE.LEFT,
        uid: uuid.v4(),
        page: 1
      },
      {
        type: ELEMENT_TYPE.TEXT,
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: PARAGRAPH_TYPE.H4,
        align: ALIGN_TYPE.LEFT,
        uid: uuid.v4(),
        page: 1
      },
      {
        type: ELEMENT_TYPE.TEXT,
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: PARAGRAPH_TYPE.H5,
        align: ALIGN_TYPE.LEFT,
        uid: uuid.v4(),
        page: 1
      },
      {
        type: ELEMENT_TYPE.TEXT,
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: PARAGRAPH_TYPE.H6,
        align: ALIGN_TYPE.LEFT,
        uid: uuid.v4(),
        page: 1
      },
      {
        type: ELEMENT_TYPE.TEXT,
        data: 'Would you choose to sleep with the fishes?',
        paragraphType: PARAGRAPH_TYPE.P,
        align: ALIGN_TYPE.LEFT,
        uid: uuid.v4(),
        page: 1
      }
    ]
  },
  getters: {
    pageElement(state: RootState) {
      return state.element.filter(
        (element: UnionElement) => element.page === state.currentPage.pageNum
      )
    },
    currentPageNum(state: RootState) {
      return state.currentPage.pageNum
    }
  },
  mutations: {
    addText(state) {
      state.element.push({
        type: ELEMENT_TYPE.TEXT,
        data: 'please edit text',
        paragraphType: 'p',
        align: ALIGN_TYPE.LEFT,
        uid: uuid.v4(),
        page: state.currentPage.pageNum
      })
    },
    addButton(state) {
      state.element.push({
        type: ELEMENT_TYPE.BUTTON,
        data: 'button',
        paragraphType: 'p',
        align: ALIGN_TYPE.LEFT,
        uid: uuid.v4(),
        page: state.currentPage.pageNum,
        colorType: THEME_ELEMENT_NAME.PRIMARY,
        linkTo: state.currentPage.pageNum
      })
    },
    editText(state, updateText: TextElement) {
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
    deleteElement(state, targetUid: string) {
      state.element = [...state.element.filter(({ uid }) => uid !== targetUid)]
    },
    changePage(state, pageNum: number) {
      state.currentPage.pageNum = pageNum
    },
    setOrderNumber(state: RootState, elementList: UnionElement[]) {
      const {
        currentPage: { pageNum }
      } = state
      const filteredList = state.element.filter(({ page }) => page !== pageNum)
      state.element = [...filteredList, ...elementList]
    }
  },
  actions: {
    addText({ commit }) {
      commit('addText')
    },
    addButton({ commit }) {
      commit('addButton')
    },
    editText({ commit }, editText: TextElement) {
      commit('editText', editText)
    },
    changePage({ commit }, pageNum: number) {
      commit('changePage', pageNum)
    }
  },
  modules: {
    editor
  },
  plugins: [
    createPersistedState({
      key: VERSION.PERSIST_KEY
    })
  ]
}

export default new Vuex.Store<RootState>(store)
