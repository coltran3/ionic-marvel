import { CharacterSummary } from "./character";
import {
  ComicList,
  DataContainer,
  Image,
  Response,
  SeriesList,
  StoryList,
  Url,
} from "./common";

export type EventsResponse = Response<EventDataContainer>;

export type EventDataContainer = DataContainer<Event>;

export interface Event {
  id?: number;
  title?: string;
  description?: string;
  resourceURI?: string;
  urls?: Url[];
  modified?: Date;
  start?: Date;
  end?: Date;
  thumbnail?: Image;
  comics?: ComicList;
  stories?: StoryList;
  series?: SeriesList;
  characters?: CharacterList;
  creators?: CreatorList;
  next?: EventSummary;
  previous?: EventSummary;
}

export interface CharacterList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: CharacterSummary[];
}

export interface CreatorList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: CreatorSummary[];
}

export interface CreatorSummary {
  resourceURI?: string;
  name?: string;
  role?: string;
}

export interface EventSummary {
  resourceURI?: string;
  name?: string;
}
