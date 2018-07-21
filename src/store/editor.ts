import { Module, GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState, EditorState } from '@/types/store'

const state: EditorState = {
  currentEditUid: ''
}

const getters: GetterTree<EditorState, RootState> = {}
const mutations: MutationTree<EditorState> = {
  setEditor(editorState: EditorState, uid: string) {
    editorState.currentEditUid = uid
  }
}
const actions: ActionTree<EditorState, RootState> = {}

export const editor: Module<EditorState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
