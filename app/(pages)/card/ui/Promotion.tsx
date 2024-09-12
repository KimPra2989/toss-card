import { Card } from '@/shared/types/card'
import Flex from '@/shared/ui/Flex/Flex'
import { Text } from '@/shared/ui/Text/Text'
import removeHtmlTags from '@/shared/utils/removeHtmlTags'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'

type PromotionProps = Pick<Card, 'promotion'>

function Promotion({ promotion }: PromotionProps) {
  if (!promotion) return null

  return (
    <Flex
      as={motion.div}
      direction="column"
      css={termsContainerStyles}
      {...promotionAnimation}
    >
      <Text bold>유의사항</Text>
      <Text typography="t7">{removeHtmlTags(promotion.terms)}</Text>
    </Flex>
  )
}

const promotionAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay: 0.6 },
}

const termsContainerStyles = css`
  margin-top: 60px;
  padding: 0 24px calc(var(--fixedBottomButton-height) + 12px) 24px;
`

export default Promotion
