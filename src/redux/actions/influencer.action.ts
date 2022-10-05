import { BaseActionType } from 'types/reducer/base';
import {
  InfluencerAction,
  InfluencerPayloadType,
  InfluencerStatusUpadtePayloadType,
} from 'types/reducer/influencer/influencer.reducer.types';
import {
  AdminTableActionType,
  InfluencerActionType,
} from './actions.constants';

export const setInfluencerData = (
  method: string,
  payload: InfluencerPayloadType
): InfluencerAction => ({
  type: InfluencerActionType.UPDATE_INFLUENCER_DATA,
  method,
  payload,
});

export const setInfluencerError = (
  method: string,
  payload: InfluencerPayloadType
): InfluencerAction => ({
  type: InfluencerActionType.SET_ERROR,
  method,
  payload,
});

export const setInfluencerLoading = (
  method: string,
  payload: InfluencerPayloadType
): InfluencerAction => ({
  type: InfluencerActionType.SET_LOADING,
  method,
  payload,
});

export const clearInfluencerState = (method: string): InfluencerAction => ({
  type: InfluencerActionType.CLEAR_STATE,
  method,
  payload: '',
});

export const getAllInfluencersRecords = (): BaseActionType => ({
  type: AdminTableActionType.GET_ALL_INFLUENCERS,
});

export const updateInfluencerStatus = (
  payload: InfluencerStatusUpadtePayloadType
): BaseActionType & { payload: InfluencerStatusUpadtePayloadType } => ({
  type: AdminTableActionType.UPDATE_INFLUENCER_STATUS,
  payload,
});
