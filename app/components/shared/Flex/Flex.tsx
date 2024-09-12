import styled from '@emotion/styled'
import { MotionProps } from 'framer-motion'
import { CSSProperties } from 'react'

export interface FlexBaseProps {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
  gap?: number
}

interface FlexProps extends MotionProps, FlexBaseProps {}

const Flex = styled.div<FlexProps>(({ align, justify, direction, gap }) => ({
  display: 'flex',
  alignItems: align,
  justifyContent: justify,
  flexDirection: direction,
  gap: gap + 'px',
}))

export default Flex
