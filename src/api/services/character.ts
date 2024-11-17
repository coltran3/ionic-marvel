import { apiClient } from "@/lib/axios";
import { API_ENDPOINTS } from "../endpoints";
import { CharacterResponseClass, GetCharacterParams } from "../types/character";

export function getCharacter({
  limit,
  nameStartsWith,
  offset,
}: GetCharacterParams) {
  return apiClient.get<CharacterResponseClass>(API_ENDPOINTS.characters, {
    params: { limit, nameStartsWith, offset },
  });
}
