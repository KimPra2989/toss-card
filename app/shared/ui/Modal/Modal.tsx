import { colors } from '@/shared/styles/colorPalette'
import styled from '@emotion/styled'
import { ReactNode, useRef, useState } from 'react'
import Button from '../Button/Button'
import { ModalContextProvider } from './ModalContext'
import Flex from '../Flex/Flex'

interface ModalProps {
  Trigger: ReactNode
  buttonLabel?: string
  onClick?: () => void
  children: ReactNode
}

const Modal = ({
  Trigger,
  buttonLabel = '확인',
  onClick = () => {},
  children,
}: ModalProps) => {
  const [open, setOpen] = useState(false)
  const modalRef = useRef<HTMLDialogElement>(null)

  const openModal = () => {
    setOpen(true)
    modalRef.current?.showModal()
  }

  const closeModal = () => {
    setOpen(false)
    modalRef.current?.close()
  }

  return (
    <ModalContextProvider open={open} setOpen={setOpen}>
      <div onClick={openModal}>{Trigger}</div>

      <Container ref={modalRef}>
        {children}
        <Flex justify={'flex-end'}>
          <Button
            weak
            style={{ marginTop: 12, border: 'none' }}
            onClick={() => {
              closeModal()
              onClick()
            }}
          >
            {buttonLabel}
          </Button>
        </Flex>
      </Container>
    </ModalContextProvider>
  )
}

const Container = styled.dialog`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  overflow: hidden;
  width: 320px;
  border: none;
  padding: 24px;
  box-sizing: border-box;
  &::backdrop {
    opacity: 0.7;
  }
`

export default Modal
