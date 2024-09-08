import useCardListQuery from '@/hook/useCardListQuery'
import useIntersectionObserver from '@/hook/useIntersectionObserver'
import { css } from '@emotion/react'
import Link from 'next/link'
import { useCallback, useRef } from 'react'
import Badge from '../shared/Badge/Badge'
import ListRow from '../shared/ListRow/ListRow'

const loadMoreHeight = '50px'

function CardList() {
  const { cards, hasNextPage, fetchNextPage, isFetching } = useCardListQuery()

  const loadMoreRef = useRef<HTMLDivElement>(null)

  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetching) {
      fetchNextPage()
    }
  }, [fetchNextPage, hasNextPage, isFetching])

  useIntersectionObserver(loadMoreRef, loadMore)

  if (!cards) return null

  return (
    <ul css={position_relative}>
      {cards?.map((card, idx) => (
        <Link href={`/card/${card.id}`} scroll={false} key={card.id}>
          <ListRow
            contents={
              <ListRow.Texts title={`${idx + 1}위`} subTitle={card.name} />
            }
            right={card.payback && <Badge label={card.payback} />}
            withArrow={true}
          />
        </Link>
      ))}
      <div ref={loadMoreRef} css={intersectionChecker} />
    </ul>
  )
}

const position_relative = css`
  position: relative;
`
const intersectionChecker = css`
  position: absolute;
  bottom: ${loadMoreHeight};
  left: 0;
  right: 0;
  height: 0;
`

export default CardList
