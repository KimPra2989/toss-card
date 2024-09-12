import { store } from '@/settings/firebase'
import { COLLECTIONS } from '@/shared/constants/Collection'
import { collection, getDocs } from 'firebase/firestore'
import { AdBanner } from '../../types/adBanner'

export async function getAdBanners() {
  const adBannerSnapshot = await getDocs(
    collection(store, COLLECTIONS.ADBANNER),
  )

  return adBannerSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as AdBanner),
  }))
}
