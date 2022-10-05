import { createReducer } from '../reducer.helper';
import { formHandler } from './handlers';

const formReducer = createReducer({}, formHandler);

export default formReducer;
