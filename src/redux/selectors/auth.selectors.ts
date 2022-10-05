import { get } from 'lodash';
import { AuthState } from 'redux/reducers/auth.reducer';

export const isUserLoggedIn = (state: { auth: AuthState }) =>
  get(state?.auth, ['userLoggedIn'], false);

export const loginErrorState = (state: { auth: AuthState }) =>
  get(state?.auth, ['error']);
