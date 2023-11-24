import type { SZUser } from '../SZUser'

export type SZUserProfile = {
  id: string
  userId: string
  User: SZUser
  name: string
  from: string
  joinReason: string
  country: string
  createdAt: Date
  updatedAt: Date
}

export type APISZUserProfileGet = {
  name?: string
  dateStart?: string | Date
  dateEnd?: string | Date
  sort?: 'asc' | 'desc'
  start?: string | number
  limit?: string | number
}

export type APISZUserProfileFind =
  | { id: string; userId: string }
  | { id?: string; userId: string }

export type APISZUserProfileCreate = {
  userId: string
  name: string
  from: string
  joinReason: string
  country: string
}

export type APISZUserProfileUpdate = {
  id: string
  name: string
}
