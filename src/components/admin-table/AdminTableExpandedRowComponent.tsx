import { Space } from 'antd';
import {
  StatusOptionKeys,
  StatusOptionToBorderClassNameMapping,
} from 'constants/components/admin-table/status.constant';
import {
  InfluencerAllInfoKeys,
  InfluencerBasicInfoKeys,
  InfluencerBasicInfoKeysToLabelMap,
} from 'constants/influencer.constants';
import { SignupApiKeys } from 'constants/signup/signup-api.constant';
import { get } from 'lodash';
import { Influencer } from 'models/entities/Influencer';
import React, { useCallback } from 'react';
import '../../styles/component/admin-table/admin-table-expanded-row.styles.scss';

interface AdminTableExpandedRowProps {
  influencer: Influencer;
}
const AdminTableExpandedRowComponent: React.FC<AdminTableExpandedRowProps> = ({
  influencer,
}) => {
  const renderInfo = useCallback(
    (key: InfluencerBasicInfoKeys, path?: Array<string>) => {
      const value = path ? get(influencer, path, '') : get(influencer, [key]);
      return (
        <div className='info-item' key={key}>
          <div className='title'>{InfluencerBasicInfoKeysToLabelMap[key]}</div>
          <div className='content'>{value}</div>
        </div>
      );
    },
    [influencer]
  );

  return (
    <div
      className={`influencer-details-container ${
        influencer?.influencerProfile?.status
          ? StatusOptionToBorderClassNameMapping[
              influencer?.influencerProfile?.status as StatusOptionKeys
            ]
          : ''
      }`}
    >
      <Space className='influencer-basic-info-container' direction='vertical'>
        {InfluencerAllInfoKeys.map((key) =>
          renderInfo(
            key,
            key === InfluencerBasicInfoKeys.EMAIL
              ? undefined
              : [SignupApiKeys.INFLUENCER_PROFILE, key]
          )
        )}
      </Space>
      {influencer?.influencerProfile.bio && (
        <div className='influencer-bio-container'>
          {renderInfo(InfluencerBasicInfoKeys.BIO, [
            SignupApiKeys.INFLUENCER_PROFILE,
            InfluencerBasicInfoKeys.BIO,
          ])}
        </div>
      )}
      {influencer?.influencerProfile.portfolio && (
        <div className='influencer-img-container'>
          {influencer?.influencerProfile.portfolio.map((path: string) => (
            <div key={path} className='image-card'>
              <img src={path} alt='placeholder' />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminTableExpandedRowComponent;
