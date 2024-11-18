import { GetCharacterByIdParams } from "@/api/types/character";
import { GetListParams } from "@/api/types/common";

export const QUERY_KEYS = {
  characters: (charactersParams: GetListParams) => [
    "characters",
    charactersParams,
  ],
  character: (characterId: GetCharacterByIdParams) => [
    "characters",
    characterId,
  ],
  events: (characterId: GetListParams) => ["events", characterId],
} as const;
