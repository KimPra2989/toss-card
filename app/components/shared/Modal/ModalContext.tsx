import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from 'react'

interface ModalContextValue {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const initialValue = {
  open: false,
  setOpen: () => {},
}

const ModalContext = createContext<ModalContextValue>(initialValue)

export function ModalContextProvider({
  open,
  setOpen,
  children,
}: ModalContextValue & { children: ReactNode }) {
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useDialogContext() {
  const values = useContext(ModalContext)

  if (values) return values

  throw new Error('useDialogContext must be used within a ModalContextProvider')
}
