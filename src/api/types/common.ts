export interface GetListParams {
  nameStartsWith: string;
  limit: number;
  offset: number;
}

export interface Response<T> {
  code?: number;
  status?: string;
  copyright?: string;
  attributionText?: string;
  attributionHTML?: string;
  data?: T;
  etag?: string;
}

export interface DataContainer<T> {
  offset?: number;
  limit?: number;
  total?: number;
  count?: number;
  results?: T[];
}

export interface Url {
  type?: string;
  url?: string;
}

export interface Image {
  path?: string;
  extension?: string;
}

export interface ComicList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: ComicSummary[];
}

export interface ComicSummary {
  resourceURI?: string;
  name?: string;
}
export interface StoryList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: StorySummary[];
}

export interface StorySummary {
  resourceURI?: string;
  name?: string;
  type?: string;
}
export interface SeriesList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: SeriesSummary[];
}

export interface SeriesSummary {
  resourceURI?: string;
  name?: string;
}
