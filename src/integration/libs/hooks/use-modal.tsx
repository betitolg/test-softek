/* eslint-disable @typescript-eslint/no-shadow */
import { useState } from 'react'

export const useModal  = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const onOpen = () => setIsOpen(!isOpen)
  return { onOpen,  isOpen, setIsOpen }
}

export const useModalWithData = () => {
  const { isOpen, setIsOpen } = useModal();
  const [data, setData] = useState(null);
  const customSetIsModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen)
    if (isOpen === false) {
      setData(null)
    }
  };
  return { customSetIsModalOpen, isOpen, setIsOpen, data, setData }
}
