export type TGroupInput = {
  label: string
  type: string
  name: string
  placeholder?: string
}

export type TGroupSelect = {
  label: string
  options: []
}

export type TCurrentAuthForm = 'register' | 'login'
