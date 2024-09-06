import { ReactNode } from 'react'
import { Text } from '../Text/Text'
import Modal from './Modal'

interface AlertProps {
  Trigger: ReactNode
  title: ReactNode
  description?: ReactNode
}

function Alert({ Trigger, title = '확인하쇼', description }: AlertProps) {
  if (!open) return null

  return (
    <Modal Trigger={Trigger}>
      <Text
        typography="t4"
        bold={true}
        display="block"
        style={{ marginTop: 0 }}
      >
        {title}
      </Text>
      {description ? <Text typography="t7">{description}</Text> : null}
    </Modal>
  )
}

export default Alert
