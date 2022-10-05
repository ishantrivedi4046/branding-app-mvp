import { get } from 'lodash';
import { createSelector } from 'reselect';
import { InfluencerInitialStateType } from 'types/reducer/influencer/influencer.reducer.types';
import { createParameterSelector } from './base.selectors';

export const influencerState = (state: {
  influencer: InfluencerInitialStateType;
}) => state?.influencer;

const getMethod = createParameterSelector(
  (params: { method: string }) => params?.method
);

export const getInfluencerMethodState = createSelector(
  influencerState,
  getMethod,
  (state: InfluencerInitialStateType, method: string) =>
    get(state, [method], {})
);
