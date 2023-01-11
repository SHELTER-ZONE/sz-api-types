export type SZForm = {
  key: string
  name: string
  description: string
  expDate: string | null
  formType: 'static' | 'event'
  anonymous: boolean
  sendChannel: string
}

export type SZFormSubmit = {
  content: any
  imgs: string[]
}

export type APISZFormCreate = {
  name: string
  description: string
  expDate: string | null
  formType: 'static' | 'event'
  anonymous: boolean
  sendChannel: string
}

export interface APIFormUpdate {
  name?: string
  description?: string
  expDate?: string | null
  formType?: 'static' | 'event'
  anonymous?: boolean
  sendChannel?: string
}
