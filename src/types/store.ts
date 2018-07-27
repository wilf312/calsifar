import { UnionElement, TextElement } from '@/types/element'

interface CurrentPage {
  type: string
  pageNum: number
}

export interface EditorState {
  currentEditUid: string
  currentEditElement: TextElement
}

export interface RootState {
  currentPage: CurrentPage
  element: UnionElement[]
}
