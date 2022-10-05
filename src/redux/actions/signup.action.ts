import { Influencer } from 'models/entities/Influencer';
import { SignupActionType } from './actions.constants';

export const registerInfluencerAction = (data: Influencer) => ({
  type: SignupActionType.REGISTER_INFLUENCER,
  data,
});
