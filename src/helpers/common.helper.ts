import { forEach, unset } from 'lodash';

export const sanitizeObjectCompletely = (object: any) => {
  if (typeof object !== 'object' || Array.isArray(object)) {
    return object;
  }
  const keysToUnset: string[] = [];
  forEach(Object.keys(object), (key) => {
    let value = object[key];
    if (typeof value === 'string' && value === '') keysToUnset.push(key);
    if (typeof value === 'object' && !Array.isArray(value)) {
      const newObj = sanitizeObjectCompletely(value);
      if (!Object.keys(newObj).length) {
        keysToUnset.push(key);
      } else {
        object[key] = newObj;
      }
    }

    if (Array.isArray(value)) {
      if (!value.length) {
        keysToUnset.push(key);
      } else if (typeof value[0] === 'object') {
        for (let i = 0; i < value.length; i += 1) {
          value[i] = sanitizeObjectCompletely(value[i]);
        }
        value = value.filter((obj) => Object.keys(obj).length);
        if (!value.length) {
          keysToUnset.push(key);
        }
      }
    }
  });

  forEach(keysToUnset, (key) => {
    unset(object, key);
  });

  return object;
};

export const validateNumber = (value: any): boolean => !value.match(/[a-zA-Z]/);
