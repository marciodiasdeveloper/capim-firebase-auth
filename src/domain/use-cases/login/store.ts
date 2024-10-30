import { FirebaseInitializeApp, LoginStore } from '@/domain/contracts/gateways'
import { FirebaseApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

type Setup = (firebase: FirebaseApp) => LoginStoreUseCase
type Input = LoginStore.Input & FirebaseInitializeApp
type Output = LoginStore.Output

export type LoginStoreUseCase = (input: Input) => Promise<Output>

export const setupLoginStore: Setup = ({ firebase }: FirebaseApp) => async input => {
  console.log('firebase', input.firebase)
  const auth = getAuth(firebase)
  const userCredential = await signInWithEmailAndPassword(auth, input.email, input.password)
  const user = userCredential.user
  const token = await user.getIdToken()
  const tokenResult = await user.getIdTokenResult()

  console.log('Token JWT:', token)
  console.log('Informações do token (Opcional: você pode obter o token decodificado com informações adicionais):', tokenResult)
  console.log('Usuário logado:', user)

  return { token }
}
