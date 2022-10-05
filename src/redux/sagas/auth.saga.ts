import { SagaPayloadType } from 'types/SagaPayload.type';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  AuthActionType,
  SignupActionType,
} from 'redux/actions/actions.constants';
import {
  authFetchMeCompletedAction,
  authFetchMeErrorAction,
  AuthLoginActionPayloadType,
  authLoginCompletedAction,
  authLoginErrorAction,
} from 'redux/actions/auth.action';
import { authService } from 'services/api-services/AuthService';
import {
  AUTH_TOKEN_EAT,
  localStorageService,
} from 'services/LocalStorageService';
import { User } from 'models/entities/User';
import jwtDecode from 'jwt-decode';
import { Influencer } from 'models/entities/Influencer';
import {
  setInfluencerData,
  setInfluencerError,
  setInfluencerLoading,
} from 'redux/actions/influencer.action';
import { InfluencerMethods } from 'constants/influencer.constants';
import { signupService } from 'services/api-services/SignupService';
import { notification } from 'antd';

interface LoginSagaPayloadType extends SagaPayloadType {
  payload: AuthLoginActionPayloadType;
}

function* loginSaga(data: LoginSagaPayloadType): any {
  try {
    const response: User = yield call(authService.login, data.payload);
    if (response?.jwtToken) {
      yield put(authLoginCompletedAction());
      localStorageService.setAuthToken(response?.jwtToken);
      const decodedToken: { exp: number } = jwtDecode(response?.jwtToken);
      localStorageService.setLocalStorageValue(
        AUTH_TOKEN_EAT,
        decodedToken?.exp?.toString()
      );
    }
  } catch (e: any) {
    yield put(
      authLoginErrorAction((e?.errors && e.errors[0]?.message) || e?.message)
    );
  }
}

function* fetchLoggedInUserSaga(): any {
  try {
    const response = yield call(authService.fetchMe);
    yield put(authFetchMeCompletedAction(response.user));
  } catch (e: any) {
    localStorageService.removeAuthToken();
    yield put(authFetchMeErrorAction(e?.message));
  }
}

function* registerInfluencerSaga(action: { type: string; data: Influencer }) {
  try {
    yield put(
      setInfluencerLoading(InfluencerMethods.REGISTER_INFLUENCER, true)
    );
    const response: { data: Influencer } = yield call(
      signupService.signup,
      action.data
    );
    if (Object.keys(response?.data ?? {}).length) {
      yield put(
        setInfluencerData(InfluencerMethods.REGISTER_INFLUENCER, 'success')
      );
    }
    yield put(setInfluencerError(InfluencerMethods.REGISTER_INFLUENCER, false));
  } catch (e) {
    notification.error({
      message: 'Something went wrong while registering the influencer!',
    });
    yield put(setInfluencerError(InfluencerMethods.REGISTER_INFLUENCER, true));
  } finally {
    yield put(
      setInfluencerLoading(InfluencerMethods.REGISTER_INFLUENCER, false)
    );
  }
}

function* authSaga() {
  yield all([
    takeLatest(AuthActionType.LOGIN, loginSaga),
    takeLatest(AuthActionType.FETCH_ME, fetchLoggedInUserSaga),
    takeLatest(SignupActionType.REGISTER_INFLUENCER, registerInfluencerSaga),
  ]);
}

export default authSaga;
