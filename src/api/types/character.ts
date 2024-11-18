import {
  Url,
  Response,
  DataContainer,
  Image,
  ComicList,
  StoryList,
  SeriesList,
} from "./common";
import { EventSummary } from "./event";

export interface GetCharacterByIdParams {
  characterId: string;
}

export type CharacterResponse = Response<CharacterDataContainer>;

export type CharacterDataContainer = DataContainer<Character>;

export interface Character {
  id?: number;
  name?: string;
  description?: string;
  modified?: Date;
  resourceURI?: string;
  urls?: Url[];
  thumbnail?: Image;
  comics?: ComicList;
  stories?: StoryList;
  events?: EventList;
  series?: SeriesList;
}

export interface EventList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: EventSummary[];
}

export interface CharacterSummary {
  resourceURI?: string;
  name?: string;
  role?: string;
}
