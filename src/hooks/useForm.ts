import { useState } from "react"

interface FormState<T> {
  [key: string]: T
}

type ChangeHandler<T> = (name: string, value: T) => void

// TODO: HOOK PARA EL MANEJO DE FORMULARIOS
export function useForm<T> () {
  const [form, setForm] = useState<FormState<T>>({})

  function handleChange<T> (name: string, value: T) {
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  }

  return { form, handleChange }
}