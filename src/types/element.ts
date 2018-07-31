import { THEME_ELEMENT_NAME, ALIGN_TYPE, ELEMENT_TYPE } from '@/const'
export interface CommonElement {
  type: ELEMENT_TYPE
  uid: string
  page: number
  align: ALIGN_TYPE
}
export interface TextElement extends CommonElement {
  data: string
  paragraphType: string
}

export interface ButtonElement extends CommonElement {
  data: string
  colorType: THEME_ELEMENT_NAME
  linkTo: number
}

export type UnionElement = TextElement | ButtonElement
