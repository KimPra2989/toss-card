'use client'

import Top from '@/components/shared/Top/Top'
import AdBanners from './components/home/AdBanners'
import CardList from './components/home/CardList'

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
