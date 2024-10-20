import { createContext } from 'react'
import { ContextProps } from './types'

export const context = createContext<ContextProps>({
  value: '',
  onChange: () => {
    return
  },
})
