function joiError(message) {
  return {
    type: "joiError",
    message: message,
  };
}

function duplicityError() {
  return {
    type: "duplicity",
    message: "Os campos não podem ser iguais!",
  };
}

function pastDateError() {
  return {
    type: "dateError",
    message: "A data inserida já passou!",
  };
}

export const errors = { joiError, duplicityError, pastDateError };
