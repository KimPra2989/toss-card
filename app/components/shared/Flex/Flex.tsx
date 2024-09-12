import styled from '@emotion/styled'
import { MotionProps } from 'framer-motion'
import { CSSProperties } from 'react'

interface FlexProps extends MotionProps {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
  gap?: number
}

const Flex = styled.div<FlexProps>(({ align, justify, direction, gap }) => ({
  display: 'flex',
  alignItems: align,
  justifyContent: justify,
  flexDirection: direction,
  gap: gap + 'px',
}))

export default Flex
