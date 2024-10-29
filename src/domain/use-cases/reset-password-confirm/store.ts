import { ResetPasswordConfirmStore } from '@/domain/contracts/gateways'
import { confirmPasswordReset, getAuth } from 'firebase/auth'

type Setup = (firebase: any) => ResetPasswordConfirmStoreUseCase
type Input = ResetPasswordConfirmStore.Input
type Output = ResetPasswordConfirmStore.Output

export type ResetPasswordConfirmStoreUseCase = (input: Input) => Promise<Output>

export const setupResetPasswordConfimStore: Setup = ({ firebase }) => async input => {
  const auth = getAuth(firebase)

  const resetEmail = await confirmPasswordReset(auth, input.oobCode, input.newPassword)

  return resetEmail
}
