import { useState, useCallback } from 'react';
import { validatePhoneNumber } from '../utils/helpers';

interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  isEmail?: boolean;
  isPhone?: boolean;
}

interface ValidationErrors {
  [key: string]: string;
}

export const useFormValidation = (rules: { [key: string]: ValidationRules }) => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateField = useCallback((name: string, value: string) => {
    const fieldRules = rules[name];
    if (!fieldRules) return '';

    if (fieldRules.required && !value) {
      return 'This field is required';
    }

    if (fieldRules.minLength && value.length < fieldRules.minLength) {
      return `Minimum ${fieldRules.minLength} characters required`;
    }

    if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
      return `Maximum ${fieldRules.maxLength} characters allowed`;
    }

    if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
      return 'Invalid format';
    }

    if (fieldRules.isEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Invalid email address';
      }
    }

    if (fieldRules.isPhone && !validatePhoneNumber(value)) {
      return 'Invalid phone number';
    }

    return '';
  }, [rules]);

  const validateForm = useCallback((data: { [key: string]: string }) => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    Object.keys(rules).forEach((fieldName) => {
      const error = validateField(fieldName, data[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [rules, validateField]);

  return {
    errors,
    validateField,
    validateForm,
  };
};

export default useFormValidation;