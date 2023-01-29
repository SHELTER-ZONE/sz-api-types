export type SZSignalChannelConfig = {
  type: string
  guildId: string
  config: {
    dashbaord: string | null
  }
}

export type APISZSignalChannelCreate = {
  type: string
  guildId: string
  config: {
    dashbaord: string | null
  }
}

export type APISZSignalChannelUpdate = {
  guildId: string
  'config.dashbaord': string | null
}

export type SZSignalChannel = {
  dashbaord: string | null
}
