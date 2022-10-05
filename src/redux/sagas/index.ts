import { all, fork } from 'redux-saga/effects';
import authSaga from './auth.saga';
import influencerSaga from './influencer.saga';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(influencerSaga)]);
}
