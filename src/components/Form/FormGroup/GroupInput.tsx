import { FormControl, FormField, FormLabel, Root as FormRoot } from '@radix-ui/react-form'
import { TGroupInput } from '@types'
import { useFormInput } from '../../../hooks/useFormInput'

export function GroupInput({ label, type, name, placeholder }: TGroupInput) {
  const { value, handleChange } = useFormInput()

  return (
    <FormRoot>
      <FormField
        name='name'
        className='mx-3 flex flex-col py-3'
      >
        <FormLabel className='font-base mb-3 text-slate-800'>{label}</FormLabel>
        <FormControl
          onChange={handleChange}
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
          className=' border-dark-blue text-dark-blue mobile:px-2 mobile:py-1 mobile:text-sm  tablet:px-12 tablet:py-2 tablet:text-base rounded-md border px-4 text-center'
        />
      </FormField>
    </FormRoot>
  )
}
