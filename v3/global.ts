export type IDByUserOrDiscord =
  | { userId?: string; discordId: string }
  | { userId: string; discordId?: string }
