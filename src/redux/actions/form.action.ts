import { FormAction } from 'types/reducer/form/form.reducer.types';
import { FormActionType } from './actions.constants';

export const creatForm = (formId: string): FormAction => ({
  type: FormActionType.CREATE_FORM,
  form_id: formId,
});

export const updateForm = (
  formId: string,
  payload: { [x: string]: any }
): FormAction => ({
  type: FormActionType.UPDATE_FORM,
  form_id: formId,
  payload,
});

export const clearForm = (formId: string): FormAction => ({
  type: FormActionType.CLEAR_FORM,
  form_id: formId,
});
