import { useSelector } from 'react-redux';

/** This will allow to select state using passed params */
export function useParamSelector(selector: any, ...params: any) {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  return useSelector((state: any) => selector(state, ...params));
}

/** This creates parametarized selector */
export function createParameterSelector(selector: any) {
  return (_: any, params: any) => selector(params);
}
