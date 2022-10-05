export type BasicOptionTypes<T> = {
  label: string;
  value: T;
};

export type TableFiltersType = {
  filterLable?: string;
  filterKey?: string;
  options?: BasicOptionTypes<any>[];
  hidden?: boolean;
};
