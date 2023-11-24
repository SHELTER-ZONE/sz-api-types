import { SZUserProfile } from '../SZUserProfile'
import { IDByUserOrDiscord } from '../global'

export type SZUser = {
  id: string
  discordId: string
  name: string
  UserProfile: SZUserProfile | null
  DailyCheckRecord: any | null
  Role: any | null
  roleId: string | null
  updatedAt: Date
  createdAt: Date
}

export type APISZUserGet = {
  name?: string
  discordId?: string
  dateStart?: string | Date
  dateEnd?: string | Date
  sort?: string | number
  start: string | number
  limit?: string | number
}
export type APISZUserFind = IDByUserOrDiscord

export type APISZUserCreate = {
  name: string
  discordId: string
  roleId: string
}

export type APISZUserUpdate = IDByUserOrDiscord & {
  name?: string
  roleId?: string
}

export type APISZUserDelete = IDByUserOrDiscord
