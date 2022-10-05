import { User } from 'models/entities/User';
import { AuthActionType } from './actions.constants';

// TODO: MOVE TO SPECIFIC TYPE FILE
export interface AuthLoginActionPayloadType {
  email: string;
  password: string;
}

export const authLoginAction = (payload: AuthLoginActionPayloadType) => ({
  type: AuthActionType.LOGIN,
  payload,
});

export const authLoginCompletedAction = () => ({
  type: AuthActionType.LOGIN_COMPLETED,
});

export const authLoginErrorAction = (message: string) => ({
  type: AuthActionType.LOGIN_ERROR,
  payload: message,
});

export const authFetchMeAction = () => ({ type: AuthActionType.FETCH_ME });
export const authLoginClearAction = () => ({
  type: AuthActionType.LOGIN_CLEAR,
});

export const authFetchMeCompletedAction = (user: User) => ({
  type: AuthActionType.FETCH_ME_COMPLETED,
  payload: user,
});

export const authFetchMeErrorAction = (message: string) => ({
  type: AuthActionType.FETCH_ME_ERROR,
  payload: message,
});

export const authLogoutAction = () => ({
  type: AuthActionType.LOGOUT,
});
