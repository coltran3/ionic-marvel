import { CharacterResponse, GetListParams } from "@/api/types/character";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { QUERY_KEYS } from "./keys";
import { getCharacters } from "@/api/services/character";

export function useCharacters(
  charactersParams: GetListParams,
  options?: Omit<UseQueryOptions<CharacterResponse>, "queryKey">
) {
  return useQuery({
    ...options,
    queryKey: QUERY_KEYS.characters(charactersParams),
    queryFn: async () => (await getCharacters(charactersParams)).data,
  });
}
