import ArrowRightIcon from '@/components/Icons/ArrowRightIcon'
import { css } from '@emotion/react'
import { ReactNode } from 'react'
import Flex from '../Flex/Flex'
import { Text } from '../Text/Text'

interface ListRowProps {
  as?: 'div' | 'li'
  left?: ReactNode
  contents: ReactNode
  right?: ReactNode
  withArrow?: boolean
}

function ListRow({
  as = 'div',
  left,
  contents,
  right,
  withArrow,
}: ListRowProps) {
  return (
    <Flex as={as} css={listRowContainerStyles} align="center">
      <Flex css={listRowLeftStyles}>{left}</Flex>
      <Flex css={listRowContentsStyles}>{contents}</Flex>
      <Flex css={listRowRightStyles}>{right}</Flex>
      {withArrow ? <ArrowRightIcon /> : null}
    </Flex>
  )
}

const listRowContainerStyles = css`
  padding: 8px 24px;
`

const listRowLeftStyles = css`
  margin-right: 14px;
`

const listRowContentsStyles = css`
  flex: 1;
`

const listRowRightStyles = css`
  margin-right: 16px;
`

function ListRowTexts({
  title,
  subTitle,
}: {
  title: string
  subTitle: string
}) {
  return (
    <Flex direction="column">
      <Text bold>{title}</Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  )
}

ListRow.Texts = ListRowTexts

export default ListRow
