import AdminTableComponent from 'components/admin-table/AdminTableComponent';
import AdminTableFiltersComponent from 'components/admin-table/AdminTableFiltersComponent';
import { InfluencerMethods } from 'constants/influencer.constants';
import { cloneDeep, forEach, get } from 'lodash';
import { Influencer } from 'models/entities/Influencer';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  clearInfluencerState,
  getAllInfluencersRecords,
} from 'redux/actions/influencer.action';
import { useParamSelector } from 'redux/selectors/base.selectors';
import { getInfluencerMethodState } from 'redux/selectors/influencer.selectors';
import '../styles/container/admin-table-container.styles.scss';

const AdminTableContainer: React.FC = () => {
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [influencers, setInfluencers] = useState<Array<Influencer>>([]);
  const [filters, setFilters] = useState<Record<string, any>>({});
  const dispatch = useDispatch();
  const allInfluencerState = useParamSelector(getInfluencerMethodState, {
    method: InfluencerMethods.GET_ALL_INFLUENCERS,
  });

  const influencerUpdateStatus = useParamSelector(getInfluencerMethodState, {
    method: InfluencerMethods.UPDATE_INFLUENCER_STATUS,
  });

  const fetchData = () => {
    setDataLoading(true);
    setFilters({});
    dispatch(clearInfluencerState(InfluencerMethods.GET_ALL_INFLUENCERS));
    dispatch(getAllInfluencersRecords());
  };

  useEffect(() => {
    if (dataLoading) {
      const loading = get(allInfluencerState, ['loading'], true);
      const error = get(allInfluencerState, ['error'], true);
      if (!loading) {
        if (!error) {
          const records: Array<Influencer> = get(
            allInfluencerState,
            ['data'],
            []
          );
          setInfluencers(records);
        }
        setDataLoading(false);
      }
    }
  }, [allInfluencerState, dataLoading]);

  useEffect(() => {
    const loading = get(influencerUpdateStatus, ['loading'], true);
    const error = get(influencerUpdateStatus, ['error'], true);
    if (!loading) {
      if (!error) {
        const state: string | undefined = get(influencerUpdateStatus, ['data']);
        if (state === 'success') {
          dispatch(
            clearInfluencerState(InfluencerMethods.UPDATE_INFLUENCER_STATUS)
          );
          fetchData();
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [influencerUpdateStatus]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFiltersChange = (key: string, value: string | number) => {
    setFilters({
      ...(filters ?? {}),
      [key]: value,
    });
  };

  const handleClearAllFilters = () => {
    setFilters({});
  };

  const filteredInfluencerData: Array<Influencer> = useMemo(() => {
    let newInfluencers = cloneDeep(influencers);
    forEach(Object.keys(filters), (key: string) => {
      const value = filters?.[key];
      switch (key) {
        case 'location':
          newInfluencers = newInfluencers.filter(
            (influencer: Influencer) =>
              influencer?.influencerProfile?.location === value
          );
          break;
        case 'terms':
          newInfluencers = newInfluencers.filter(
            (influencer: Influencer) =>
              influencer?.influencerProfile?.terms === value
          );
          break;
        case 'status':
          newInfluencers = newInfluencers.filter(
            (influencer: Influencer) =>
              influencer?.influencerProfile?.status === value
          );
          break;
        case 'following':
          newInfluencers = newInfluencers.filter((influencer: Influencer) => {
            const instagramFollowers =
              influencer?.influencerProfile?.instagramFollowers ?? 0;
            const tiktokFollowers =
              influencer?.influencerProfile?.tiktokFollowers ?? 0;
            return (
              (value?.$gte <= instagramFollowers &&
                value?.$lte >= instagramFollowers) ||
              (value?.$gte <= tiktokFollowers && value?.$lte >= tiktokFollowers)
            );
          });
          break;
        case 'interests':
          newInfluencers = newInfluencers.filter((influencer: Influencer) =>
            influencer?.influencerProfile?.interests?.includes(value)
          );
          break;
        default:
          break;
      }
    });
    return newInfluencers;
  }, [filters, influencers]);

  return (
    <div className='admin-table-container'>
      <AdminTableFiltersComponent
        totalRecords={filteredInfluencerData.length}
        filters={filters}
        onFiltersChange={handleFiltersChange}
        onClearAllFilters={handleClearAllFilters}
      />
      <AdminTableComponent
        loading={dataLoading}
        influencers={filteredInfluencerData}
      />
    </div>
  );
};

export default AdminTableContainer;
