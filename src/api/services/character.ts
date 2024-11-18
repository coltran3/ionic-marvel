import { apiClient } from "@/lib/axios";
import { API_ENDPOINTS } from "../endpoints";
import { CharacterResponse, GetCharacterByIdParams } from "../types/character";
import { GetListParams } from "../types/common";

export function getCharacters({
  limit,
  nameStartsWith,
  offset,
}: GetListParams) {
  return apiClient.get<CharacterResponse>(API_ENDPOINTS.characters, {
    params: {
      limit,
      nameStartsWith: nameStartsWith ? nameStartsWith : undefined,
      offset,
    },
  });
}

export function getCharacterById({ characterId }: GetCharacterByIdParams) {
  return apiClient.get<CharacterResponse>(
    API_ENDPOINTS.characterById(characterId),
    {
      params: {
        characterId,
      },
    }
  );
}
