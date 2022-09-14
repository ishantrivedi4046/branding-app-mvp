import { BasicOptionTypes } from 'types/components/admin-table/adminTable.type';

export enum StatusOptionKeys {
  APPROVED = 'approved',
  DECLINED = 'declined',
  PENDING = 'pending',
}

export const STATUS_OPTIONS: Array<BasicOptionTypes<StatusOptionKeys>> = [
  { label: 'Approved', value: StatusOptionKeys.APPROVED },
  { label: 'Declined', value: StatusOptionKeys.DECLINED },
  { label: 'Pending', value: StatusOptionKeys.PENDING },
];

export const StatusOptionToColorMapping: Record<StatusOptionKeys, string> = {
  [StatusOptionKeys.APPROVED]: '#5FC026',
  [StatusOptionKeys.DECLINED]: '#F04222',
  [StatusOptionKeys.PENDING]: '#D2AC5B',
};

export const StatusOptionToBorderClassNameMapping: Record<
  StatusOptionKeys,
  string
> = {
  [StatusOptionKeys.APPROVED]: 'border-approved',
  [StatusOptionKeys.DECLINED]: 'border-declined',
  [StatusOptionKeys.PENDING]: 'border-pending',
};
