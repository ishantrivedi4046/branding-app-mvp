export type SocialNetworkDataType = {
  handle: string;
  followers: string;
};

export type BasicOptionTypes<T> = {
  label: string;
  value: T;
};

export type TableFiltersType = {
  filterLable?: string;
  filterKey?: string;
  options?: BasicOptionTypes<string>[];
};
