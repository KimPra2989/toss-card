import useCardListQuery from '@/hook/useCardListQuery'
import { useRouter } from 'next/navigation'
import ListRow from '../shared/ListRow/ListRow'

function CardList() {
  const router = useRouter()

  const { cards, hasNextPage, fetchNextPage, isFetching } = useCardListQuery()

  // const loadMore = useCallback(() => {
  //   if (hasNextPage === false || isFetching) {
  //     return
  //   }
  //   return fetchNextPage()
  // }, [fetchNextPage, hasNextPage, isFetching])

  if (!cards) return null

  return (
    <ul>
      <button
        onClick={() => {
          fetchNextPage()
        }}
      >
        다음 페이지
      </button>
      {cards?.map((card, idx) => (
        <ListRow
          key={card.id}
          left={<div>left</div>}
          contents={
            <ListRow.Texts title={`${idx + 1}위`} subTitle={card.name} />
          }
          right={card.payback ? <div>{card.payback}</div> : null}
          withArrow={true}
          onClick={() => {
            router.push(`/card/${card.id}`)
          }}
        />
      ))}
    </ul>
  )
}

export default CardList
