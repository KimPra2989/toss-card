'use client'

import { css } from '@emotion/react'
import { useQuery } from '@tanstack/react-query'

import CheckIcon from '@/components/Icons/CheckIcons'
import FixedBottomButton from '@/components/shared/FixedBottomButton/FixedBottomButton'
import Flex from '@/components/shared/Flex/Flex'
import ListRow from '@/components/shared/ListRow/ListRow'
import { Text } from '@/components/shared/Text/Text'
import Top from '@/components/shared/Top/Top'
import { getCard } from '@/remote/getCards'
import removeHtmlTags from '@/utils/removeHtmlTags'

interface CardDetailProps {
  params: {
    cardId: string
  }
}

export default function CardDetail({ params }: CardDetailProps) {
  const cardId = params.cardId

  const { data } = useQuery({
    queryKey: ['card', cardId],
    queryFn: () => getCard(cardId),
    enabled: cardId !== '',
  })

  if (data == null) {
    return null
  }

  const { name, corpName, promotion, tags, benefit } = data

  const subTitle =
    (promotion && removeHtmlTags(promotion.title)) ?? tags.join(', ')

  return (
    <main>
      <Top title={`${corpName} ${name}`} subTitle={subTitle} />
      <ul>
        {benefit.map((text, index) => {
          return (
            <ListRow
              as="li"
              key={text}
              left={<CheckIcon />}
              contents={
                <ListRow.Texts title={`혜택 ${index + 1}`} subTitle={text} />
              }
            />
          )
        })}
      </ul>
      {promotion && (
        <Flex direction="column" css={termsContainerStyles}>
          <Text bold={true}>유의사항</Text>
          <Text typography="t7">{removeHtmlTags(promotion.terms)}</Text>
        </Flex>
      )}
      <FixedBottomButton label="신청하기" onClick={() => {}} />
    </main>
  )
}

const termsContainerStyles = css`
  margin-top: 60px;
  padding: 0 24px calc(var(--fixedBottomButton-height) + 12px) 24px;
`
