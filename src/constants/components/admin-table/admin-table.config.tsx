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
} from 'types/components/admin-table/AdminTable.type';
import { Influencer, InfluencerProfileKeys } from 'models/entities/Influencer';
import { FaTiktok } from 'react-icons/fa';
import {
  SignupFormHobbyName,
  SignupFormLocationName,
} from 'constants/signup/signup.config';
import {
  StatusOptionKeys,
  StatusOptionToBorderClassNameMapping,
} from './status.constant';

const LOCATION_FILTER_OPTIONS: Array<BasicOptionTypes<string>> = [
  {
    label: SignupFormLocationName.ADELAIDE,
    value: SignupFormLocationName.ADELAIDE,
  },
  {
    label: SignupFormLocationName.BRISBANE,
    value: SignupFormLocationName.BRISBANE,
  },
  {
    label: SignupFormLocationName.CANBERRA,
    value: SignupFormLocationName.CANBERRA,
  },
  {
    label: SignupFormLocationName.DARWIN,
    value: SignupFormLocationName.DARWIN,
  },
  {
    label: SignupFormLocationName.HOBART,
    value: SignupFormLocationName.HOBART,
  },
  {
    label: SignupFormLocationName.MELBOURNE,
    value: SignupFormLocationName.MELBOURNE,
  },
  { label: SignupFormLocationName.PERTH, value: SignupFormLocationName.PERTH },
  {
    label: SignupFormLocationName.SYDNEY,
    value: SignupFormLocationName.SYDNEY,
  },
];

const INTERESTS_FILTER_OPTIONS: Array<BasicOptionTypes<string>> = [
  { label: SignupFormHobbyName.ART, value: SignupFormHobbyName.ART },
  { label: SignupFormHobbyName.BEAUTY, value: SignupFormHobbyName.BEAUTY },
  { label: SignupFormHobbyName.FASHION, value: SignupFormHobbyName.FASHION },
  { label: SignupFormHobbyName.FITNESS, value: SignupFormHobbyName.FITNESS },
  { label: SignupFormHobbyName.FOOD, value: SignupFormHobbyName.FOOD },
  {
    label: SignupFormHobbyName.LIFESTYLE,
    value: SignupFormHobbyName.LIFESTYLE,
  },
  {
    label: SignupFormHobbyName.PARENTHOOD,
    value: SignupFormHobbyName.PARENTHOOD,
  },
  { label: SignupFormHobbyName.PETS, value: SignupFormHobbyName.PETS },
  {
    label: SignupFormHobbyName.SEXUAL_HEALTH,
    value: SignupFormHobbyName.SEXUAL_HEALTH,
  },
  {
    label: SignupFormHobbyName.TRAVEL,
    value: SignupFormHobbyName.TRAVEL,
  },
  { label: SignupFormHobbyName.VLOGS, value: SignupFormHobbyName.VLOGS },
];

const TERMS_FILTER_OPTIONS: Array<BasicOptionTypes<string>> = [
  { label: 'Paid Only', value: 'Paid' },
  { label: 'Contra Only', value: 'Contra' },
  { label: 'Both', value: 'Both' },
];

const STATUS_FILTER_OPTIONS: Array<BasicOptionTypes<string>> = [
  { label: 'Approved', value: StatusOptionKeys.APPROVED },
  { label: 'Pending', value: StatusOptionKeys.PENDING },
  { label: 'Declined', value: StatusOptionKeys.DECLINED },
];

const FOLLOWING_FILTER_OPTIONS: Array<
  BasicOptionTypes<{ $lte: number; $gte: number }>
> = [
  { label: '5000 - 10000', value: { $gte: 5000, $lte: 10000 } },
  { label: '11000 - 20000', value: { $gte: 11000, $lte: 20000 } },
  { label: '21000 - 30000', value: { $gte: 21000, $lte: 30000 } },
  { label: '31000 - 40000', value: { $gte: 32000, $lte: 40000 } },
];

export const ADMIN_TABLE_COLUMNS: Array<ColumnProps<any> & TableFiltersType> = [
  {
    ...baseColumnConfig('Name', 'name'),
    onCell: (record) => ({
      className:
        StatusOptionToBorderClassNameMapping[
          get(record, ['influencerProfile', 'status']) as StatusOptionKeys
        ],
    }),
    render: (_, record: Influencer) =>
      record?.firstName?.concat(' ', record?.lastName),
  },
  {
    ...baseColumnConfig('Location', 'influencerProfile'),
    filterLable: 'Location',
    filterKey: 'location',
    options: LOCATION_FILTER_OPTIONS,
    render: (item: InfluencerProfileKeys) => item?.location,
  },
  socialNetworkColumnConfig(
    'Instagram',
    'influencerProfile',
    'instagramFollowers'
  ),
  socialNetworkColumnConfig(
    'Tiktok',
    'influencerProfile',
    'tiktokFollowers',
    FaTiktok as any
  ),
  {
    ...baseColumnConfig('Interests', 'influencerProfile'),
    render: (item: InfluencerProfileKeys) => {
      const interestList = item.interests?.join(', ');
      return interestList;
    },
    filterLable: 'Interests',
    filterKey: 'interests',
    options: INTERESTS_FILTER_OPTIONS,
  },
  {
    ...baseColumnConfig('Terms', 'influencerProfile'),
    render: (item: InfluencerProfileKeys) => item.terms,
    filterLable: 'Terms',
    filterKey: 'terms',
    options: TERMS_FILTER_OPTIONS,
  },
  {
    ...baseColumnConfig('Status', 'influencerProfile'),
    render: (item: InfluencerProfileKeys, rec: Influencer) => (
      <StatusComponent
        status={item?.status as StatusOptionKeys}
        influencerId={rec?.id as string}
      />
    ),
    filterLable: 'Status',
    filterKey: 'status',
    options: STATUS_FILTER_OPTIONS,
  },
  {
    filterLable: 'Following',
    filterKey: 'following',
    options: FOLLOWING_FILTER_OPTIONS,
    hidden: true,
  },
];
