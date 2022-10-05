import { Influencer } from 'models/entities/Influencer';
import { BaseActionType } from '../base';

export type InfluencerPayloadType =
  | Influencer
  | Influencer[]
  | string
  | boolean;

export type InfluencerDataType = {
  [x: string]: InfluencerPayloadType;
};

export type InfluencerInitialStateType = Record<string, InfluencerDataType>;

export interface InfluencerAction extends BaseActionType {
  payload: InfluencerPayloadType;
  method: string;
}

export type InfluencerHandlerTypes = (
  state: InfluencerInitialStateType,
  action: InfluencerAction
) => InfluencerInitialStateType;

export type InfluencerStatusUpadtePayloadType = { id: string; status: string };
