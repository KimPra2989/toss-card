import CheckIcon from '@/shared/icons/CheckIcons'
import { Card } from '@/shared/types/card'
import ListRow from '@/shared/ui/ListRow/ListRow'
import { motion } from 'framer-motion'

type BenefitListProps = Pick<Card, 'benefit'>

function BenefitList({ benefit }: BenefitListProps) {
  return (
    <ul>
      {benefit.map((text, index) => {
        return (
          <motion.li {...listAnimation(index)} key={text}>
            <ListRow
              key={text}
              left={<CheckIcon />}
              contents={
                <ListRow.Texts title={`혜택 ${index + 1}`} subTitle={text} />
              }
            />
          </motion.li>
        )
      })}
    </ul>
  )
}

const listAnimation = (index: number) => ({
  initial: {
    opacity: 0,
    translateX: -90,
  },
  animate: {
    opacity: 1,
    translateX: 0,
  },
  transition: {
    duration: 0.7,
    ease: 'easeInOut',
    delay: index * 0.1,
  },
})

export default BenefitList
