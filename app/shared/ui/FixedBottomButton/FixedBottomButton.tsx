import { colors } from '@/shared/styles/colorPalette'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Button from '../Button/Button'

interface FixedBottomButtonProps {
  label: string
  onClick: () => void
}

function FixedBottomButton({ label, onClick }: FixedBottomButtonProps) {
  return (
    <Container {...buttonAnimation}>
      <Button size="medium" full onClick={onClick} css={buttonStyles}>
        {label}
      </Button>
    </Container>
  )
}

const Container = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.white};
  padding: 20px 10px 8px;
`

const buttonAnimation = {
  initial: { translateY: '100%' },
  animate: { translateY: 0 },
  transition: { duration: 0.5, ease: 'easeInOut', delay: 0.7 },
}

const buttonStyles = css`
  border-radius: 8px;
`

export default FixedBottomButton
