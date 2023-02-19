export type SZDailyCheckRecord = {
  id: string
  userId: string
  lastRecord: Date
}
export type APISZDailyCheckRecordGet = {
  userId: string
}
export type APISZDailyCheckRecordFind = {
  userId: string
}
export type APISZDailyCheckRecordCreate = {
  userId: string
  start: number
  limit: number
  sort: 'asc' | 'desc'
  from: string | Date
  end: string | Date
}
export type APISZDailyCheckRecordUpdate = {
  lastRecord: string | Date
}
export type APISZDailyCheckRecordDelete = {
  userId: string
}
