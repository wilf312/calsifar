import { Module } from 'vuex'
import { RootState, EditorState } from '@/types/store'

const state: EditorState = {
  currentEditUid: ''
}
export const editor: Module<EditorState, RootState> = {
  namespaced: true,
  state,
  mutations: {
    setEditor(editorState: EditorState, uid: string) {
      editorState.currentEditUid = uid
    }
  },
  actions: {}
}
