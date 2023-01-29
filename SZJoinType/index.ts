export type SZJoinTypeConfig = {
  type: string
  guildId: string
  config: {
    permanentRoleID: string | null
    temporaryRoleID: string | null
  }
}

export type APISZJoinTypeConfigCreate = {
  type: string
  guildId: string
  config?: {
    permanentRoleID: string | null
    temporaryRoleID: string | null
  }
}

export type APISZJoinTypeConfigUpdate = {
  guildId: string
  'config.permanentRoleID': string | null
  'config.temporaryRoleID': string | null
}
