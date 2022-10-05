// Auth
export enum AuthActionType {
  LOGIN = 'auth/login',
  LOGIN_COMPLETED = 'auth/login/completed',
  LOGIN_ERROR = 'auth/login/error',
  LOGOUT = 'auth/logout',
  FETCH_ME = 'auth/fetch/me',
  FETCH_ME_COMPLETED = 'auth/fetch/me/completed',
  FETCH_ME_ERROR = 'auth/fetch/me/error',
  LOGIN_CLEAR = 'auth/login/clear',
}

export enum FormActionType {
  CREATE_FORM = 'create_form',
  UPDATE_FORM = 'update_form',
  CLEAR_FORM = 'clear_form',
}

export enum InfluencerActionType {
  UPDATE_INFLUENCER_DATA = 'update_influencer_data',
  SET_LOADING = 'set_loading',
  SET_ERROR = 'set_error',
  CLEAR_STATE = 'clear_state',
}

export enum AdminTableActionType {
  GET_ALL_INFLUENCERS = 'get_all_influencers',
  UPDATE_INFLUENCER_STATUS = 'update_influencer_status',
}

export enum SignupActionType {
  REGISTER_INFLUENCER = 'register_influencer',
}
