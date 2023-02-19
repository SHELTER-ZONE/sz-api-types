export type SZDailyCheckRecord = {
  id: string
  userId: string
  lastRecord: Date
}
export type APISZDailyCheckRecordGet = {
  userId?: string
  start?: number
  limit?: number
  sort?: 'asc' | 'desc'
  from?: string | Date
  end?: string | Date
}
export type APISZDailyCheckRecordFind = {
  userId: string
}
export type APISZDailyCheckRecordCreate = {
  userId: string
}
export type APISZDailyCheckRecordUpdate = {
  userId: string
  lastRecord: string | Date
}
export type APISZDailyCheckRecordDelete = {
  userId: string
}
