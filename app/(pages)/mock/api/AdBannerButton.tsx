import { store } from '@/settings/firebase'
import { COLLECTIONS } from '@/shared/constants/Collection'
import Button from '@/shared/ui/Button/Button'
import { collection, doc, writeBatch } from 'firebase/firestore'
import { adBanners } from './data'

function AdBannerButton() {
  const handleButtonClick = () => {
    const batch = writeBatch(store)

    adBanners.forEach((banner) => {
      const docRef = doc(collection(store, COLLECTIONS.ADBANNER))

      batch.set(docRef, banner)
    })

    batch.commit()

    alert('배너 데이터 추가 성공')
  }

  return <Button onClick={handleButtonClick}>배너 추가</Button>
}

export default AdBannerButton
