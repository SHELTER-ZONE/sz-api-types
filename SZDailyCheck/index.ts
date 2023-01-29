export type SZDailyCheckConfig = {
  type: string
  guildId: string
  config: {
    autoDailyCheckChannels: string[] | null
    commandDailyCheckChannel: string | null
  }
}

export type APISZDailyCheckConfigCreate = {
  type: string
  guildId: string
  config?: {
    autoDailyCheckChannels: string[] | null
    commandDailyCheckChannel: string | null
  }
}

export type APISZDailyCheckConfigUpdate = {
  guildId: string
  'config.autoDailyCheckChannels'?: string[] | null
  'config.commandDailyCheckChannel'?: string | null
}

export type APISZDailyCheckCreate = {
  guildID: string
  memberID: string
}
export type APISZDailyCheckUpdate = {
  guildID: string
  memberID: string
}

export type SZDailyCheck = {
  memberID: string
  isWhiteList: boolean
  lastCheck: string
}

export type MemberDailyCheckUpdateData = {
  isWhiteList: boolean
  lastCheck: string
}

export type MemberWhiteListUpdateData = {
  isWhiteList: boolean
}

export type autoDailyCheckChannelsParams = {
  guildID: string
}
export type autoDailyCheckChannelsData = {
  channels: string[]
}
