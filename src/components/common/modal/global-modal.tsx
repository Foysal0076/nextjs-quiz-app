'use client'

import { Modal } from '@/components/common/modal/modal'

import { useModal } from './use-modal'

const GlobalModal = () => {
  const { view, isOpen, closeModal } = useModal()

  return (
    <Modal open={isOpen} handleClose={closeModal}>
      {view}
    </Modal>
  )
}

export default GlobalModal
