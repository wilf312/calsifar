import { UnionElement } from '@/types/element'

interface CurrentPage {
  type: string
  pageNum: number
}
export interface RootState {
  currentPage: CurrentPage
  currentEditUid: string
  element: UnionElement[]
}
