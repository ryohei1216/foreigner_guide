export type CountriesInterface = {
  _type: string;
  instrumentation: Instrumentation;
  readLink: string;
  webSearchUrl: string;
  totalEstimatedMatches: number;
  nextOffset: number;
  value: Value[];
} | null;

export interface Instrumentation {
  _type: string;
}

export interface Value {
  webSearchUrl: string;
  name: string;
  thumbnailUrl: string;
  datePublished: string;
  contentUrl: string;
  hostPageUrl: string;
  contentSize: string;
  encodingFormat: string;
  hostPageDisplayUrl: string;
  width: number;
  height: number;
  thumbnail: Thumbnail;
  imageInsightsToken: string;
  insightsMetadata: InsightsMetadata;
  imageId: string;
  accentColor: string;
}

export interface Thumbnail {
  width: number;
  height: number;
}

export interface InsightsMetadata {
  recipeSourcesCount: number;
  bestRepresentativeQuery: BestRepresentativeQuery;
  pagesIncludingCount: number;
  availableSizesCount: number;
}

export interface BestRepresentativeQuery {
  text: string;
  displayText: string;
  webSearchUrl: string;
}

/**
 * User
 */
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  area: string;
};

/**
 * SignInInfo
 */

export interface SignInInfo {
  id: string;
  email: string;
  password: string;
}

/**
 * Main
 */
export type MenuItem = {
  title: string;
  path: string;
};

/**
 * GuidesArea
 */
export type areaItem = {
  title: string;
  path: string;
};

/**
 * GuidesCountry
 */
export type countryItem = {
  title: string;
  path: string;
};

/**
 * CountriesCard
 */

export type wikiData = {
  description: string;
  thumbnail: {
    url: string;
  };
};

/**
 * Message
 */

export type Message = {
  UserId: string;
  Message: string;
  CreatedAt: Date;
};
