import { apiClient } from "@/lib/axios";
import { GetListParams } from "../types/common";
import { API_ENDPOINTS } from "../endpoints";
import { EventsResponse } from "../types/event";

export function getEvents({ limit, nameStartsWith, offset }: GetListParams) {
  return apiClient.get<EventsResponse>(API_ENDPOINTS.events, {
    params: {
      limit,
      nameStartsWith: nameStartsWith ? nameStartsWith : undefined,
      offset,
    },
  });
}
