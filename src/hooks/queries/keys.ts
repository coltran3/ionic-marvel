import { GetCharactersParams } from "@/api/types/character";

export const QUERY_KEYS = {
  characters: (charactersParams: GetCharactersParams) => [
    "characters",
    charactersParams,
  ],
} as const;
