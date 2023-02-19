export type SZUser = {
  id: string
  userId: string
  lastRecord: Date
}
export type APISZUserGet = {
  userId?: string
  type?: 'user' | 'bot'
  sort?: 'asc' | 'desc'
  start?: number
  limit?: number
  from?: string | Date
  end?: string | Date
}
export type APISZUserFind = {
  userId: string
}
export type APISZUserCreate = {
  userId: string
  type: 'user' | 'bot'
}
// export type APISZUserUpdate = {
//   userId: string
//   lastRecord: string | Date
// }
export type APISZUserDelete = {
  userId: string
}
