import { cloneDeep, get, unset } from 'lodash';
import { InfluencerActionType } from 'redux/actions/actions.constants';
import {
  InfluencerAction,
  InfluencerHandlerTypes,
  InfluencerInitialStateType,
} from 'types/reducer/influencer/influencer.reducer.types';

const updateInfluencerDataHandler = (
  state: InfluencerInitialStateType,
  action: InfluencerAction
) => {
  const newState = cloneDeep(state);
  return {
    ...(newState ?? {}),
    [action.method]: {
      ...get(newState, [action.method], {}),
      data: action.payload,
    },
  } as InfluencerInitialStateType;
};

const setLoadingInfluecerHandler = (
  state: InfluencerInitialStateType,
  action: InfluencerAction
) => {
  const newState = cloneDeep(state);
  return {
    ...(newState ?? {}),
    [action.method]: {
      ...get(newState, [action.method], {}),
      loading: action.payload,
    },
  } as InfluencerInitialStateType;
};

const setErrorInfluecerHandler = (
  state: InfluencerInitialStateType,
  action: InfluencerAction
) => {
  const newState = cloneDeep(state);
  return {
    ...(newState ?? {}),
    [action.method]: {
      ...get(newState, [action.method], {}),
      error: action.payload,
    },
  } as InfluencerInitialStateType;
};

const clearInfluencerState = (
  state: InfluencerInitialStateType,
  action: InfluencerAction
) => {
  const newState = cloneDeep(state);
  unset(newState, [action.method]);
  return newState;
};

export const influencerHandler: Record<
  InfluencerActionType,
  InfluencerHandlerTypes
> = {
  [InfluencerActionType.UPDATE_INFLUENCER_DATA]: updateInfluencerDataHandler,
  [InfluencerActionType.SET_LOADING]: setLoadingInfluecerHandler,
  [InfluencerActionType.SET_ERROR]: setErrorInfluecerHandler,
  [InfluencerActionType.CLEAR_STATE]: clearInfluencerState,
};
