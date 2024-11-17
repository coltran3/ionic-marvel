import { apiClient } from "@/lib/axios";
import { API_ENDPOINTS } from "../endpoints";
import { CharacterResponse, GetCharacterParams } from "../types/character";

export function getCharacter({
  limit,
  nameStartsWith,
  offset,
}: GetCharacterParams) {
  return apiClient.get<CharacterResponse>(API_ENDPOINTS.characters, {
    params: {
      limit,
      nameStartsWith: nameStartsWith ? nameStartsWith : undefined,
      offset,
    },
  });
}
