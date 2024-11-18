import { GetListParams, GetCharacterByIdParams } from "@/api/types/character";

export const QUERY_KEYS = {
  characters: (charactersParams: GetListParams) => [
    "characters",
    charactersParams,
  ],
  character: (characterId: GetCharacterByIdParams) => [
    "characters",
    characterId,
  ],
} as const;
