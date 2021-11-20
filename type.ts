export interface CountriesInterface {
  _type: string;
  instrumentation: Instrumentation;
  readLink: string;
  webSearchUrl: string;
  totalEstimatedMatches: number;
  nextOffset: number;
  value: Value[];
}

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
