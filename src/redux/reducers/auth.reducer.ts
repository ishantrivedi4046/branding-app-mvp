import produce from 'immer';
import { Reducer } from 'redux';
import { AuthActionType } from 'redux/actions/actions.constants';
import {
  AUTH_TOKEN_EAT,
  localStorageService,
} from 'services/LocalStorageService';

export interface AuthState {
  userID?: number;
  userLoggedIn?: boolean;
  loading?: boolean;
  error?: string;
}

const initialState: AuthState = {};

export const authReducer: Reducer<AuthState> = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: AuthState = initialState,
  action: any
) =>
  produce(state, (draft: AuthState) => {
    switch (action.type) {
      case AuthActionType.LOGIN:
      case AuthActionType.FETCH_ME: {
        draft.loading = true;
        break;
      }
      case AuthActionType.LOGIN_COMPLETED:
        draft.userLoggedIn = true;
        break;
      case AuthActionType.FETCH_ME_COMPLETED: {
        draft.userID = action.payload.id;
        draft.loading = false;
        draft.error = undefined;
        break;
      }
      case AuthActionType.LOGIN_ERROR:
      case AuthActionType.FETCH_ME_ERROR: {
        draft.loading = false;
        draft.error = action.payload;
        break;
      }
      case AuthActionType.LOGIN_CLEAR:
        draft.error = undefined;
        draft.loading = false;
        break;
      case AuthActionType.LOGOUT: {
        localStorageService.removeAuthToken();
        localStorageService.removeLocalStorageValue(AUTH_TOKEN_EAT);
        draft.userLoggedIn = false;
        break;
      }
      default:
        break;
    }
  });
