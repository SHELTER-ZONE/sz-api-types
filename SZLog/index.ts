export interface SZLog {
  key: string
  userName: string
  userId: string
  from: string
  action: string
  logContent: any
  date: number
  __expires: number | null
}

export interface APISZLogCreate {
  userName: string
  userId: string
  from: string
  action: string
  logContent: any
  date: number
  __expires?: number | null
}
