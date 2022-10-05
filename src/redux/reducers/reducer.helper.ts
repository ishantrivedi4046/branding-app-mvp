import { BaseActionType } from 'types/reducer/base';

// Follwing beter way to write reducers pattern: https://redux.js.org/usage/reducing-boilerplate#generating-reducers
// Gives better code reading and maintaining as compare to switch case structure e.g requiredFieldReducer
export function createReducer(initialState: any, handlers: any) {
  return function reducer(state: any, action: BaseActionType) {
    if (handlers?.[action.type]) {
      return handlers[action.type](state ?? initialState, action);
    }
    return state ?? initialState;
  };
}
