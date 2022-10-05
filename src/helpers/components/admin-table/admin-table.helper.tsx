import { InstagramOutlined } from '@ant-design/icons';
import { ColumnProps } from 'antd/lib/table';
import { SocialNetworkDataType } from 'models/entities/Influencer';
import React from 'react';

/** This function returns the base column config which include :
 * 1. Title
 * 2. Key
 * 3. Data Index
 */
export const baseColumnConfig = (title: string, key: string) =>
  ({
    title,
    key,
    dataIndex: key,
    width: '10%',
  } as ColumnProps<any>);

/** This function takes icon as an optional param and returns the specific column config which has custom render */
export const socialNetworkColumnConfig = (
  title: string,
  key: string,
  path: string,
  Icon = InstagramOutlined
) => ({
  ...baseColumnConfig(title, key),
  render: (item: SocialNetworkDataType) =>
    item?.[path] ? (
      <div className='social-network-column'>
        <Icon />
        <div className='followers'>{item?.[path]}</div>
      </div>
    ) : (
      '-'
    ),
});
