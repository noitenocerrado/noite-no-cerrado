import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  QueryDocumentSnapshot,
} from 'firebase/firestore'
import { db } from '@/lib/firebase'

interface Photo {
  id: string
  src: string
  author: string
  location: string
  iso: number
  exposure: string
  aperture: number
  focalLength: number
  equipment: string
  createdAt: string
}

class PhotoService {
  private photosCollection = collection(db, 'photos')

  async getPhotoById(id: string): Promise<Photo | null> {
    try {
      const docRef = doc(this.photosCollection, id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as Photo
      } else {
        return null
      }
    } catch (error) {
      console.error(`Error getting photo by ID: ${id}`, error)
      throw new Error('Could not fetch photo')
    }
  }

  async getAllPhotos(
    pageSize: number,
    lastVisible?: QueryDocumentSnapshot
  ): Promise<{ photos: Photo[]; lastVisible: QueryDocumentSnapshot | null }> {
    try {
      let q = query(
        this.photosCollection,
        orderBy('createdAt'),
        limit(pageSize)
      )

      if (lastVisible) {
        q = query(
          this.photosCollection,
          orderBy('createdAt'),
          startAfter(lastVisible),
          limit(pageSize)
        )
      }

      const photoSnapshot = await getDocs(q)
      const lastVisibleDocument =
        photoSnapshot.docs[photoSnapshot.docs.length - 1]

      const photos = photoSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Photo[]

      return {
        photos,
        lastVisible: lastVisibleDocument || null,
      }
    } catch (error) {
      console.error('Error getting photos', error)
      throw new Error('Could not fetch photos')
    }
  }
}

export const photoService = new PhotoService()
