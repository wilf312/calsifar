import { Module, GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState, EditorState } from '@/types/store'
import { TextElement, UnionElement } from '@/types/element'
import {
  PARAGRAPH_TYPE,
  ALIGN_TYPE,
  ELEMENT_TYPE,
  THEME_ELEMENT_NAME
} from '@/const'

const state: EditorState = {
  currentEditUid: '',
  currentEditElement: {
    type: ELEMENT_TYPE.TEXT,
    data: '',
    paragraphType: PARAGRAPH_TYPE.P,
    align: ALIGN_TYPE.LEFT,
    uid: '',
    page: 1
  }
}

const getters: GetterTree<EditorState, RootState> = {
  element: (state: EditorState, getters, rootState): UnionElement => {
    const notFound: TextElement = {
      type: ELEMENT_TYPE.TEXT,
      data: '',
      paragraphType: PARAGRAPH_TYPE.P,
      align: ALIGN_TYPE.LEFT,
      uid: '',
      page: 1
    }
    if (state.currentEditUid === '') {
      return notFound
    }
    return (
      rootState.element.find(({ uid }) => uid === state.currentEditUid) ||
      notFound
    )
  },
  currentEditUid: (state: EditorState): string => state.currentEditUid,
  currentEditElement: (state: EditorState): UnionElement =>
    state.currentEditElement
}
const mutations: MutationTree<EditorState> = {
  setEditorUid(editorState: EditorState, uid: string): void {
    editorState.currentEditUid = uid
  },
  setEditorElement(editorState: EditorState, element: TextElement): void {
    editorState.currentEditElement = {
      ...element
    }
  }
}
const actions: ActionTree<EditorState, RootState> = {
  setEditor({ commit, getters }, uid: string) {
    commit('setEditorUid', uid)
    commit('setEditorElement', getters.element)
  },
  updateText({ dispatch, getters }, text: string) {
    dispatch(
      'editText',
      {
        ...getters.element,
        data: text
      },
      { root: true }
    )
  },
  updateParagraphType({ dispatch, getters }, paragraphType: string) {
    dispatch(
      'editText',
      {
        ...getters.element,
        paragraphType
      },
      { root: true }
    )
  },
  updateAlign({ dispatch, getters }, align: string) {
    dispatch(
      'editText',
      {
        ...getters.element,
        align
      },
      { root: true }
    )
  },
  updateLinkTo({ dispatch, getters }, linkTo: string) {
    dispatch(
      'editText',
      {
        ...getters.element,
        linkTo: Number(linkTo)
      },
      { root: true }
    )
  },
  updateColorType({ dispatch, getters }, colorType: THEME_ELEMENT_NAME) {
    dispatch(
      'editText',
      {
        ...getters.element,
        colorType
      },
      { root: true }
    )
  }
}

export const editor: Module<EditorState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
