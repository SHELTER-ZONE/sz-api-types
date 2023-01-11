export interface SZUser {
  key: string
  id: string
  name: string
  createdAt: number
  updatedAt: number
  permissions: string[]
  roles: string[]
  type: 'bot' | 'user'
}

export interface APISZUserCreate {
  id: string
  name: string
  createdAt?: number
  updatedAt?: number
  permissions: string[]
  roles: string[]
  type: 'bot' | 'user'
}

export interface APISZUserUpdate {
  name?: string
  createdAt?: number
  updatedAt?: number
  permissions?: string[]
  roles?: string[]
  type?: 'bot' | 'user'
}

export interface APISZUserQuery {
  limit: number
  last: string
  id?: string
  name?: string
  roles?: string[]
  type?: 'bot' | 'user'
  'permissions?contains'?: string
  'createdAt?lt'?: number
  'createdAt?gt'?: number
}
