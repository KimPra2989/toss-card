import styled from '@emotion/styled'
import { CSSProperties } from 'react'

interface FlexProps {
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
