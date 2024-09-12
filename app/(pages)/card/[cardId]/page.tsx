'use client'

import BenefitList from '@/(pages)/card/ui/BenefitList'
import Promotion from '@/(pages)/card/ui/Promotion'
import FixedBottomButton from '@/shared/ui/FixedBottomButton/FixedBottomButton'
import Top from '@/shared/ui/Top/Top'
import removeHtmlTags from '@/shared/utils/removeHtmlTags'
import { useQuery } from '@tanstack/react-query'
import { getCard } from '../api/getCard'

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
