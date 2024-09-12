import { css } from '@emotion/react'
import Flex from '../Flex/Flex'
import { Text } from '../Text/Text'

interface TopProps {
  title: string
  subTitle: string
}

function Top({ title, subTitle }: TopProps) {
  return (
    <Flex direction="column" css={containerStyles}>
      <Text typography="t4" bold={true}>
        {title}
      </Text>
      <Text typography="t6">{subTitle}</Text>
    </Flex>
  )
}

const containerStyles = css`
  padding: 24px;
`
export default Top
