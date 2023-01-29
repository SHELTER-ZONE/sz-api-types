export type SZJoinTypeConfig = {
  key: string
  config: {
    permanentRoleID: string | null
    temporaryRoleID: string | null
  }
}

export type APISZJoinTypeConfigCreate = {
  key: string
  config?: {
    permanentRoleID: string | null
    temporaryRoleID: string | null
  }
}

export type APISZJoinTypeConfigUpdate = {
  'config.permanentRoleID': string | null
  'config.temporaryRoleID': string | null
}

export type SZJoinType = {
  permanentRoleID: string | null
  temporaryRoleID: string | null
}
