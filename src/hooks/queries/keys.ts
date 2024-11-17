import { GetCharacterParams } from "@/api/types/character";

export const QUERY_KEYS = {
  characters: (charactersParams: GetCharacterParams) => [
    "characters",
    charactersParams,
  ],
} as const;
