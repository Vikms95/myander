import { SyntheticEvent, useState } from 'react'

interface useFormInputReturn {
  value: string
  handleChange: (e: SyntheticEvent) => void
}

export function useFormInput(initialValue: string = ''): useFormInputReturn {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e: SyntheticEvent): void => {
    const element = e.currentTarget as HTMLInputElement | HTMLTextAreaElement
    setValue(element.value)
  }

  return { value, handleChange }
}
