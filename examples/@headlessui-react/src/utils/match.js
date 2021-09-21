export function match(value, lookup, ...args) {
  if (value in lookup) {
      let returnValue = lookup[value];
      return typeof returnValue === 'function' ? returnValue(...args) : returnValue;
  }
  let error = new Error(`Tried to handle "${value}" but there is no handler defined. Only defined handlers are: ${Object.keys(lookup)
      .map(key => `"${key}"`)
      .join(', ')}.`);
  if (Error.captureStackTrace)
      Error.captureStackTrace(error, match);
  throw error;
}