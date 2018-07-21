import { UnionElement } from '@/types/element'

interface CurrentPage {
  type: string
  pageNum: number
}

export interface EditorState {
  currentEditUid: string
}

export interface RootState {
  currentPage: CurrentPage
  element: UnionElement[]
}
