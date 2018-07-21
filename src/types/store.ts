import { UnionElement, TextElement } from '@/types/element'

interface CurrentPage {
  type: string
  pageNum: number
}

export interface EditorState {
  currentEditUid: string
  currendEditElement: TextElement
}

export interface RootState {
  currentPage: CurrentPage
  element: UnionElement[]
}
