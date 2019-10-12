// Validate required parameters in functions
// https://medium.freecodecamp.org/elegant-patterns-in-modern-javascript-roro-be01e7669cbd

const requiredParam = (param) => {
  const requiredParamError = new Error(`Required parameter, "${param}" is missing.`);
  // Preserve original stack trace
  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(requiredParamError, requiredParam);
  }
  throw requiredParamError;
};

export { requiredParam };
