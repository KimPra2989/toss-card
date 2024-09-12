import { COLLECTIONS } from '@/shared/constants/Collection'
import { Card } from '@/shared/types/card'
import { doc, getDoc } from 'firebase/firestore'
import { store } from '../../../settings/firebase'

export async function getCard(id: string) {
  const snapshot = await getDoc(doc(store, COLLECTIONS.CARD, id))
  return {
    id,
    ...(snapshot.data() as Card),
  }
}
