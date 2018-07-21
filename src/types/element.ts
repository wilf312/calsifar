export interface TextElement {
  type: string
  data: string
  paragraphType: string
  uid: string
}
export interface ButtonElement {
  type: string
  uid: string
}

export type UnionElement = TextElement | ButtonElement
