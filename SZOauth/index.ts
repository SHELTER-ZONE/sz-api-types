export interface APISZOAuthGetLoginUrl {
  redirectUri: string
}

export interface APISZOAuthGetAccessToken {
  redirectUri: string
  code: string
}

export interface APISZOAuthLogin {
  accessToken: string
  userId: string
}
