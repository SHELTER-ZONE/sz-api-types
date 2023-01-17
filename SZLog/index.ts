export type SZLog = {
  key: string
  userName: string
  userId: string
  from: string
  action: string
  logContent: any
  date: number
  __expires: number | null
}

export type APISZLogCreate = {
  userName: string
  userId: string
  from: string
  action: string
  logContent: any
  date: number
  __expires?: number | null
}
