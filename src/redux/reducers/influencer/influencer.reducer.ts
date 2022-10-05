import { createReducer } from '../reducer.helper';
import { influencerHandler } from './influencer.handlers';

const influencerReducer = createReducer({}, influencerHandler);

export default influencerReducer;
