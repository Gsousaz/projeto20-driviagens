function joiError(message) {
  return {
    type: "joiError",
    message: message,
  };
}

export const errors = { joiError };
