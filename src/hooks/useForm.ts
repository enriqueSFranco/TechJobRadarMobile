import { useState } from "react"

export function useForm<T> (initialState: T) {
  const [form, setForm] = useState<T>(initialState)

  function handleChange<K extends keyof T> (name: K, value: T[K]) {
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  }

  return { form, handleChange }
}