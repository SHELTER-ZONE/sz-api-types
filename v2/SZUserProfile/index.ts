import type { SZUser } from '../SZUser'

export type SZUserProfile = {
  id: string
  user: SZUser
  name: string
  rep: number
  createAt: Date
  updateAt: Date
}
export type APISZUserProfileGet = {
  sort?: 'asc' | 'desc'
  start?: number
  limit?: number
  from?: string | Date
  end?: string | Date
  name?: string
}
export type APISZUserProfileFind = {
  id: string
}
export type APISZUserProfileFindQuery = {
  byUserId: boolean
}
export type APISZUserProfileCreate = {
  userId: string
  name: string
  rep?: number
}
export type APISZUserProfileUpdate = {
  id: string
  rep?: number
  name?: string
}
export type APISZUserProfileUpdateQuery = {
  byUserId: boolean
}
export type APISZUserProfileDelete = {
  id: string
}
export type APISZUserProfileDeleteQuery = {
  byUserId: boolean
}
