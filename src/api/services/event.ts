import { apiClient } from "@/lib/axios";
import { GetListParams } from "../types/common";
import { API_ENDPOINTS } from "../endpoints";
import { EventResponse } from "../types/event";

export function getEvents({ limit, nameStartsWith, offset }: GetListParams) {
  return apiClient.get<EventResponse>(API_ENDPOINTS.events, {
    params: {
      limit,
      nameStartsWith: nameStartsWith ? nameStartsWith : undefined,
      offset,
    },
  });
}
