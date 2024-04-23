import { createContext } from 'react'
import { TypeContextModal } from './types'

export const ContextModalSearch = createContext<TypeContextModal>({
  isOpenModal: false,
  setIsOpenModal: () => {},
})
