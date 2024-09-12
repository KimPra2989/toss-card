'use client'

import BenefitList from '@/components/detail/BenefitList'
import Promotion from '@/components/detail/Promotion'
import FixedBottomButton from '@/components/shared/FixedBottomButton/FixedBottomButton'
import Top from '@/components/shared/Top/Top'
import { getCard } from '@/remote/getCards'
import removeHtmlTags from '@/utils/removeHtmlTags'
import { useQuery } from '@tanstack/react-query'

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

  if (!data) return null

  const { name, corpName, promotion, tags, benefit } = data

  const subTitle =
    (promotion && removeHtmlTags(promotion.title)) ?? tags.join(', ')

  return (
    <main>
      <Top title={`${corpName} ${name}`} subTitle={subTitle} />
      <BenefitList benefit={benefit} />
      {promotion && <Promotion promotion={promotion} />}
      <FixedBottomButton label="신청하기" onClick={() => {}} />
    </main>
  )
}
