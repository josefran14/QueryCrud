import { useState } from "react"
import { useDeleteUser } from "./useDeleteUser"

export const useModal = () => {

  const [modal, setModal] = useState(false)
  
  const handleOpenModal = () =>{
    setModal(true)
  }

  const handleCloseModal = () =>{
    setModal(false)
  }

  return {
    modal,
    handleOpenModal,
    handleCloseModal,
  }
}
