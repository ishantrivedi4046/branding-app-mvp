import { BaseActionType } from '../base';

export type FormValueType = { [x: string]: string | string[] };

export type FormInitialStateType = Record<
  string,
  { [x: string]: string | string[] | FormValueType }
>;

export interface FormAction extends BaseActionType {
  form_id?: string;
  payload?: { [x: string]: string | string[] | FormValueType };
}

export type FormHandlerTypes = (
  state: FormInitialStateType,
  action: BaseActionType
) => FormInitialStateType;
