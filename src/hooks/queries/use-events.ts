import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { QUERY_KEYS } from "./keys";
import { GetListParams } from "@/api/types/common";
import { getEvents } from "@/api/services/event";
import { EventsResponse } from "@/api/types/event";

export function useEvents(
  eventsParams: GetListParams,
  options?: Omit<UseQueryOptions<EventsResponse>, "queryKey">
) {
  return useQuery({
    ...options,
    queryKey: QUERY_KEYS.events(eventsParams),
    queryFn: async () => (await getEvents(eventsParams)).data,
  });
}
