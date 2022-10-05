/* eslint-disable no-console */
import React from 'react';
import { FormValueType } from 'types/reducer/form/form.reducer.types';

export const FormContext = React.createContext<{
  getFromForm: (
    key: string,
    defaultValue: any
  ) => string | Array<string> | FormValueType;
  setIntoForm: (key: string, value: string | Array<string>) => void;
}>({
  getFromForm: (key: string, defaultValue: any) => defaultValue,
  setIntoForm: (key: string, value: string | Array<string>) => {
    console.log(key, value);
  },
});
