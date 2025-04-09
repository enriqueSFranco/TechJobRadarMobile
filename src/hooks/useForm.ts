import { useState } from "react";

export function useForm<T> (initialState: T, validate) {
  const [form, setForm] = useState<T>(initialState);
  const [errors, setErrors] = useState<Record<string, any>>({});

  function handleChange<K extends keyof T> (name: K, value: T[K]) {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleBlur(name: string) {
    const fieldErrors = validate(form);

    if (fieldErrors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: fieldErrors[name],
      }));
    } else {
      setErrors((prevErrors) => {
        const { [name]: removedError, ...restErrors } = prevErrors;
        return restErrors;
      });
    }
  }

  return { form, errors, handleChange, handleBlur };
}
