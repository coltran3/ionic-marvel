import {
  CharacterResponse,
  GetCharacterByIdParams,
} from "@/api/types/character";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { QUERY_KEYS } from "./keys";
import { getCharacterById } from "@/api/services/character";

export function useCharacter(
  characterByIdParams: GetCharacterByIdParams,
  options?: Omit<UseQueryOptions<CharacterResponse>, "queryKey">
) {
  return useQuery({
    ...options,
    queryKey: QUERY_KEYS.character(characterByIdParams),
    queryFn: async () => (await getCharacterById(characterByIdParams)).data,
  });
}
