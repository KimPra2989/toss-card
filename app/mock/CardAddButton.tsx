import { card_list } from '@/mock/data'
import { store } from '@/remote/firebase'
import { collection, doc, writeBatch } from 'firebase/firestore'
import { COLLECTIONS } from '@/constants/Collection'
import Button from '@/components/shared/Button/Button'

function CardAddButton() {
  const handleButtonClick = () => {
    const batch = writeBatch(store)
    card_list.forEach((card) => {
      const docRef = doc(collection(store, COLLECTIONS.CARD))
      batch.set(docRef, card)
    })
    batch.commit()
    alert('카드 데이터 추가 성공')
  }

  return <Button onClick={handleButtonClick}>카드 추가</Button>
}

export default CardAddButton
