import { apiClient } from "@/lib/axios";
import { API_ENDPOINTS } from "../endpoints";
import {
  CharacterResponse,
  GetCharacterByIdParams,
  GetCharactersParams,
} from "../types/character";

export function getCharacters({
  limit,
  nameStartsWith,
  offset,
}: GetCharactersParams) {
  return apiClient.get<CharacterResponse>(API_ENDPOINTS.characters, {
    params: {
      limit,
      nameStartsWith: nameStartsWith ? nameStartsWith : undefined,
      offset,
    },
  });
}

export function getCharacterById({ characterId }: GetCharacterByIdParams) {
  return apiClient.get<CharacterResponse>(API_ENDPOINTS.characters, {
    params: {
      characterId,
    },
  });
}
