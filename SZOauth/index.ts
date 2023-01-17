export type APISZOAuthGetLoginUrl = {
  redirectUri: string
}

export type APISZOAuthGetAccessToken = {
  redirectUri: string
  code: string
}

export type APISZOAuthLogin = {
  accessToken: string
  userId: string
}
