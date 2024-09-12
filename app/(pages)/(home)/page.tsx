'use client'

import Top from '@/shared/ui/Top/Top'
import AdBanners from './ui/AdBanners'
import CardList from './ui/CardList'

export default function Home() {
  return (
    <main>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택 좋은 카드를 모아봤어요."
      />
      <AdBanners />
      <CardList />
    </main>
  )
}
