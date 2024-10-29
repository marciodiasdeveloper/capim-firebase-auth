import { AuthEmailAlreadyInUse } from '@/application/errors'
import { UserStore } from '@/domain/contracts/gateways'
import { getAuth, updateProfile, createUserWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { getFirestore, doc, setDoc, Firestore } from 'firebase/firestore'

type Setup = (firebase: any) => UserStoreUseCase
type Input = UserStore.Input
type Output = UserStore.Output

export type UserStoreUseCase = (input: Input) => Promise<Output>

export const setupUserStore: Setup = ({ firebase }) => async input => {
  const auth = getAuth(firebase)
  const db: Firestore = getFirestore(firebase)

  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, input.email, input.password)
    const user = userCredential.user

    await updateProfile(user, { displayName: input.displayName })

    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      displayName: input.displayName,
      phoneNumber: input.phoneNumber,
      createdAt: new Date().toISOString()
    })

    const token = await user.getIdToken()

    return { token }
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      throw new AuthEmailAlreadyInUse()
    }
  }
}
