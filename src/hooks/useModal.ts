import { useState } from 'react'

interface Props {
  initialState?: boolean
}

export const useModal = ({ initialState = false }: Props) => {
  const [isOpen, updateIsOpen] = useState(initialState)

  function toggleModal () {
    updateIsOpen(prevState => !prevState)
  }

  return { isOpen, toggleModal }
}
