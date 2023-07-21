import Cookies from 'js-cookie';
import { serverBaseURL } from '../../urls/urls';
import submit from './submitForm';
import { hasNumber, hasLowerCase, hasSymbol, hasUpperCase } from './utils';

const validateForm = (formData) => {
  const errors = {
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  };

  const setError = (key, value) => {
    errors[key] = value;
  };

  for (const [key, val] of Object.entries(formData)) {
    // Ensure form is not empty
    if (val.length === 0) {
      setError(key, `${key} must not be empty.`);
    }

    // Ensure firstName is valid
    if (key === 'firstName' && val.length > 40) {
      setError(key, 'First Name length must be less than 40 characters.');
    }

    // Ensure lastName is valid
    if (key === 'lastName' && val.length > 40) {
      setError(key, 'Last Name length must be less than 40 characters.');
    }

    // Ensure username is valid
    if (key === 'username' && (val.length < 3 || val.length > 16)) {
      setError(key, 'Username length must be between 3 and 16 characters.');
    }

    const invalidPasswordConditions = [
      {
        validation: val.length < 8,
        errorMessage:
          "Your password is a little bit short, please ensure it's more than 8 characters.",
      },
      {
        validation: val.length > 16,
        errorMessage:
          "Your password is a little bit long, please ensure it's less than 16 characters.",
      },
      {
        validation: !hasLowerCase(val),
        errorMessage:
          'Your password is a little weak, please ensure you include at least one lower case.',
      },
      {
        validation: !hasUpperCase(val),
        errorMessage:
          'Your password is a little weak, please ensure you include at least one upper case.',
      },
      {
        validation: !hasNumber(val),
        errorMessage:
          'Your password is a little weak, please ensure you include at least one number.',
      },
      {
        validation: !hasSymbol(val),
        errorMessage:
          'Your password is a little weak, please ensure you include at least one symbol.',
      },
    ];

    // Ensure password is valid
    if (key === 'password') {
      for (const condition of invalidPasswordConditions) {
        if (condition.validation) {
          setError(key, condition.errorMessage);
        }
      }
    }

    // Ensure confirmPassword is valid
    if (key === 'confirmPassword' && val !== formData.password) {
      setError(
        key,
        'Confirm Password must match your password, please ensure these values are the same.'
      );
    }
  }

  const isFormClean = Object.values(errors).every((error) => error === null)
  if (isFormClean) {
    Cookies.set('user', formData.username);
    return submit(serverBaseURL + '/register/', formData, '/confirm');
  }

  return errors;
};

export default validateForm;
