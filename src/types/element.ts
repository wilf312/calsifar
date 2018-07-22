export interface TextElement {
  type: string
  data: string
  paragraphType: string
  align: string
  uid: string
  page: number
}
export interface ButtonElement {
  type: string
  uid: string
  page: number
}

export type UnionElement = TextElement | ButtonElement
