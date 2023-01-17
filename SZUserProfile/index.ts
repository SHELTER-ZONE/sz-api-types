export type SZUserProfile = {
  key: string
  name: string
  userId: string
  title: string[] | null
  createdAt: number
  updatedAt: number
  rep: number
  org: any | null
  role: 'user' | 'admin'
}

export type APISZUserProfileCreate = {
  name: string
  userId: string
  createdAt?: number
  updatedAt?: number
  title?: string[] | null
  rep?: number
  org?: any | null
  role?: 'user' | 'admin'
}

export type APISZUserProfileUpdate = {
  name?: string
  title?: string[] | null
  createdAt?: number
  updatedAt?: number
  rep?: number
  org?: any | null
  role?: 'user' | 'admin'
}
