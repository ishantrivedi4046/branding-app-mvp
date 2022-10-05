import { cloneDeep, get, unset } from 'lodash';
import { FormActionType } from 'redux/actions/actions.constants';
import {
  FormAction,
  FormHandlerTypes,
  FormInitialStateType,
} from 'types/reducer/form/form.reducer.types';

const createFormHandler = (state: FormInitialStateType, action: FormAction) => {
  if (action.form_id) {
    const newState = cloneDeep(state);
    return {
      ...(newState ?? {}),
      [action.form_id]: {},
    };
  }
  return state;
};

const updateFormHandler = (state: FormInitialStateType, action: FormAction) => {
  if (action?.form_id) {
    const newState = cloneDeep(state);
    return {
      ...(newState ?? {}),
      [action.form_id]: {
        ...get(newState, [action.form_id], {}),
        ...(action?.payload ?? {}),
      },
    };
  }
  return state;
};

const clearForm = (state: FormInitialStateType, action: FormAction) => {
  if (action?.form_id) {
    const newState = cloneDeep(state);
    unset(newState, [action?.form_id]);
    return newState;
  }
  return state;
};

export const formHandler: Record<FormActionType, FormHandlerTypes> = {
  [FormActionType.CREATE_FORM]: createFormHandler,
  [FormActionType.UPDATE_FORM]: updateFormHandler,
  [FormActionType.CLEAR_FORM]: clearForm,
};
