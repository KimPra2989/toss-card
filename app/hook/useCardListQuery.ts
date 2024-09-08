import { getCards } from '@/remote/getCards'
import flatten from '@/utils/flatten'
import { useInfiniteQuery } from '@tanstack/react-query'

const useCardListQuery = () => {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['cards'],
    initialPageParam: null,
    queryFn: async ({ pageParam }: { pageParam: any }) =>
      await getCards(pageParam),
    getNextPageParam: (snapshot) => snapshot?.lastVisible || null,
  })

  if (!data) return {}

  // data 한 배열로 묶기
  const cards = flatten(data.pages.map(({ items }) => items))

  return { cards, hasNextPage, fetchNextPage, isFetching }
}

export default useCardListQuery
