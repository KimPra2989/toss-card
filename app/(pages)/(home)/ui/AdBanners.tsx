import { getAdBanners } from '@/(pages)/(home)/api/adBanner/getAdBanners'
import { colors } from '@/shared/styles/colorPalette'
import Flex from '@/shared/ui/Flex/Flex'
import { Text } from '@/shared/ui/Text/Text'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

function AdBanners() {
  const { data, isLoading } = useQuery({
    queryKey: ['adBanners'],
    queryFn: () => getAdBanners(),
  })

  return (
    <Container>
      <Swiper spaceBetween={8}>
        {data?.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Link href={banner.link}>
              <Flex direction="column" gap={6} css={bannerContainerStyles}>
                <Text bold>{banner.title}</Text>
                <Text typography="t7">{banner.description}</Text>
              </Flex>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
`

const bannerContainerStyles = css`
  padding: 16px;
  background-color: ${colors.grey};
  border-radius: 4px;
`

export default AdBanners
