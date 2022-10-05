import { notification } from 'antd';
import { InfluencerMethods } from 'constants/influencer.constants';
import { get } from 'lodash';
import { Influencer } from 'models/entities/Influencer';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { AdminTableActionType } from 'redux/actions/actions.constants';
import {
  setInfluencerData,
  setInfluencerError,
  setInfluencerLoading,
} from 'redux/actions/influencer.action';
import { influencerApiService } from 'services/api-services/InfluencerApiService';

function* getAllInfluencerSaga() {
  try {
    yield put(
      setInfluencerLoading(InfluencerMethods.GET_ALL_INFLUENCERS, true)
    );
    const response: { data: Array<Influencer> } = yield call(
      influencerApiService.getAllInfluencer
    );
    yield put(
      setInfluencerData(
        InfluencerMethods.GET_ALL_INFLUENCERS,
        get(response, ['data'], [])
      )
    );
    yield put(setInfluencerError(InfluencerMethods.GET_ALL_INFLUENCERS, false));
  } catch (error: any) {
    let message = 'Something went wrong!';
    if (error.response && error.response.data) {
      message = error.response.data.message;
    }

    notification.error({
      message: message ?? 'Something went wrong!',
    });
    yield put(setInfluencerError(InfluencerMethods.GET_ALL_INFLUENCERS, true));
  } finally {
    yield put(
      setInfluencerLoading(InfluencerMethods.GET_ALL_INFLUENCERS, false)
    );
  }
}

function* updateInfluencerStatusSaga(action: {
  type: string;
  payload: {
    id: string;
    status: string;
  };
}) {
  try {
    yield put(
      setInfluencerLoading(InfluencerMethods.UPDATE_INFLUENCER_STATUS, true)
    );
    const response: { data: Influencer } = yield call(
      influencerApiService.updateInfluencerStatus,
      action.payload
    );
    if (Object.keys(response?.data ?? {}).length) {
      yield put(
        setInfluencerData(InfluencerMethods.UPDATE_INFLUENCER_STATUS, 'success')
      );
    }
    yield put(
      setInfluencerError(InfluencerMethods.UPDATE_INFLUENCER_STATUS, false)
    );
  } catch (e) {
    notification.error({
      message: 'Something went wrong!',
    });
    yield put(
      setInfluencerError(InfluencerMethods.UPDATE_INFLUENCER_STATUS, true)
    );
  } finally {
    yield put(
      setInfluencerLoading(InfluencerMethods.UPDATE_INFLUENCER_STATUS, false)
    );
  }
}

function* influencerSaga() {
  yield all([
    takeLatest(AdminTableActionType.GET_ALL_INFLUENCERS, getAllInfluencerSaga),
    takeEvery(
      AdminTableActionType.UPDATE_INFLUENCER_STATUS,
      updateInfluencerStatusSaga
    ),
  ]);
}
export default influencerSaga;
