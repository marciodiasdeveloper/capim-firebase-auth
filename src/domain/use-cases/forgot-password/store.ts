import { ForgotPasswordStore } from '@/domain/contracts/gateways'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

type Setup = (firebase: any) => ForgotPasswordStoreUseCase
type Input = ForgotPasswordStore.Input
type Output = ForgotPasswordStore.Output

export type ForgotPasswordStoreUseCase = (input: Input) => Promise<Output>

export const setupForgotPasswordControllerUseCase: Setup = ({ firebase }) => async input => {
  const auth = getAuth(firebase)

  await sendPasswordResetEmail(auth, input.email)
}
