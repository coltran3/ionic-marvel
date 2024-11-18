import {
  GetCharactersParams,
  GetCharacterByIdParams,
} from "@/api/types/character";

export const QUERY_KEYS = {
  characters: (charactersParams: GetCharactersParams) => [
    "characters",
    charactersParams,
  ],
  character: (characterId: GetCharacterByIdParams) => [
    "characters",
    characterId,
  ],
} as const;
