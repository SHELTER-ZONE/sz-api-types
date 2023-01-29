export type SZSignalChannelConfig = {
  key: string
  config: {
    dashbaord: string | null
  }
}

export type APISZSignalChannelCreate = {
  key: string
  config: {
    dashbaord: string | null
  }
}

export type APISZSignalChannelUpdate = {
  'config.dashbaord': string | null
}

export type SZSignalChannel = {
  config: {
    dashbaord: string | null
  }
}
