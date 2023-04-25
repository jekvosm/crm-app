import { initializeApp } from 'firebase/app'

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  onAuthStateChanged,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  QueryDocumentSnapshot,
  Timestamp,
  collection,
  writeBatch,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA8aQdBRcYneETRmgPZiHq001YXz89ryrs',
  authDomain: 'crm-db-787d5.firebaseapp.com',
  projectId: 'crm-db-787d5',
  storageBucket: 'crm-db-787d5.appspot.com',
  messagingSenderId: '1057864942676',
  appId: '1:1057864942676:web:d8df7b8ecfdab6f71499c1',
}

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore(firebaseApp)

export type AdditionalInformation = {
  displayName?: string
}

export type UserData = {
  createdAt: Date | Timestamp | string
  displayName: string
  email: string
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<QueryDocumentSnapshot<UserData> | void> => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log('error creating the user', error)
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>
}

export const getUserDataFromUserSnapshot = async (
  userSnapshot: QueryDocumentSnapshot<UserData>
): Promise<UserData> => {
  const userData = userSnapshot.data()
  const createdAt = userData.createdAt as Timestamp
  return {
    ...userData,
    createdAt: createdAt.toDate().toString(),
  }
}

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutAuth = async () => await signOut(auth)

export const getUserAuth = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      userAuth => {
        unsubscribe()
        resolve(userAuth)
      },
      reject
    )
  })
}

export interface ObjectToAdd {
  id: string
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string | undefined,
  objectsToAdd: T[]
): Promise<void> => {
  if (!collectionKey || !objectsToAdd) return

  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.id)
    batch.set(docRef, object)
  })

  await batch.commit()
}

export const deleteCollectionAndDocuments = async (
  collectionKey: string | undefined,
  documentKey: string | undefined
): Promise<void> => {
  if (!collectionKey || !documentKey) return

  const collectionRef = collection(db, collectionKey)
  const docRef = doc(collectionRef, documentKey)

  const batch = writeBatch(db)

  batch.delete(docRef)

  await batch.commit()
}
