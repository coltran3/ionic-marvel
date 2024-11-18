export const API_ENDPOINTS = {
  characters: "/v1/public/characters",
  characterById: (characterId: string) =>
    `/v1/public/characters/${characterId}`,
  events: "/v1/public/events",
} as const;
