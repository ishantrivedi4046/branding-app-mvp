import { FormInitialStateType } from 'types/reducer/form/form.reducer.types';
import { createSelector } from 'reselect';
import { get } from 'lodash';
import { createParameterSelector } from './base.selectors';

export const forms = (state: { form: FormInitialStateType }) => state?.form;

const getFormId = createParameterSelector(
  (params: { form_id: string }) => params?.form_id
);

export const getForm = createSelector(
  forms,
  getFormId,
  (allForms: FormInitialStateType, formId: string) =>
    get(allForms, [formId], {})
);
