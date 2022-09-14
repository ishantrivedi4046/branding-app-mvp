import React from 'react';
import { ColumnProps } from 'antd/lib/table';
import { get } from 'lodash';
import {
  baseColumnConfig,
  socialNetworkColumnConfig,
} from 'helpers/components/admin-table/admin-table.helper';
import StatusComponent from 'components/admin-table/StatusComponent';
import {
  BasicOptionTypes,
  TableFiltersType,
} from 'types/components/admin-table/adminTable.type';
import {
  StatusOptionKeys,
  StatusOptionToBorderClassNameMapping,
} from './status.constant';

const LOCATION_FILTER_OPTIONS: Array<BasicOptionTypes<string>> = [
  { label: 'BNE', value: 'bne' },
  { label: 'AU', value: 'au' },
  { label: 'SDY', value: 'sdy' },
  { label: 'GER', value: 'ger' },
  { label: 'GC', value: 'gc' },
  { label: 'MLB', value: 'mlb' },
  { label: 'PUJ', value: 'puj' },
  { label: 'DER', value: 'der' },
];

export const ADMIN_TABLE_COLUMNS: Array<ColumnProps<any> & TableFiltersType> = [
  {
    ...baseColumnConfig('Name', 'name'),
    onCell: (record) => ({
      className:
        StatusOptionToBorderClassNameMapping[
          get(record, ['status']) as StatusOptionKeys
        ],
    }),
  },
  {
    ...baseColumnConfig('Location', 'location'),
    filterLable: 'Location',
    filterKey: 'location',
    options: LOCATION_FILTER_OPTIONS,
  },
  socialNetworkColumnConfig('Instagram', 'instagram'),
  socialNetworkColumnConfig('Tiktok', 'tiktok'),
  {
    ...baseColumnConfig('Interests', 'interests'),
    filterLable: 'Interests',
    filterKey: 'interests',
    options: LOCATION_FILTER_OPTIONS,
  },
  {
    ...baseColumnConfig('Terms', 'terms'),
    filterLable: 'Terms',
    filterKey: 'terms',
    options: LOCATION_FILTER_OPTIONS,
  },
  {
    ...baseColumnConfig('Status', 'status'),
    render: (item: StatusOptionKeys) => <StatusComponent status={item} />,
    filterLable: 'Status',
    filterKey: 'status',
    options: LOCATION_FILTER_OPTIONS,
  },
];
