import { useState } from 'react'

interface IRegisterFields {
  username: string
  password: string
  password2: string

  touched: {
    username: boolean
    password: boolean
    password2: boolean
  }
}

export const useForm = (formFields: {}) => {
  const [formData, setFormData] = useState(formFields)

  const handleChange = (e: HTMLElement) => {
    const element = e.target as HTMLInputElement

    setFormData((prev) => ({
      ...prev,
      [element.name]: element.value,
    }))
  }

  const handleBlur = (e) => {
    const field = e.target.name

    setFormData((prev: IRegisterFields) => ({
      ...prev,
      touched: { ...prev.touched, [field]: true },
    }))
  }

  return { formData, setFormData, handleChange, handleBlur }
}
