import ArrowRightIcon from '@/components/Icons/ArrowRightIcon'
import { css } from '@emotion/react'
import { ReactNode } from 'react'
import Flex from '../Flex/Flex'
import { Text } from '../Text/Text'

interface ListRowProps {
  contents: ReactNode
  right?: ReactNode
  withArrow?: boolean
  onClick?: () => void
}

function ListRow({ contents, right, withArrow, onClick }: ListRowProps) {
  return (
    <Flex as="li" css={listRowContainerStyles} onClick={onClick} align="center">
      <Flex css={listRowContentsStyles}>{contents}</Flex>
      <Flex css={listRowRightStyles}>{right}</Flex>
      {withArrow ? <ArrowRightIcon /> : null}
    </Flex>
  )
}

const listRowContainerStyles = css`
  padding: 8px 24px;
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
