import { AuthorizationTokenValidate } from '@/domain/contracts/gateways'

// import { ValidateUser } from 'library-auth'
import { env } from '@/main/config/env'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { getAuth, signInWithCustomToken } from 'firebase/auth'

export class AuthenticateMiddleware implements AuthorizationTokenValidate {
  async authorizeToken (input: AuthorizationTokenValidate.Input): Promise<AuthorizationTokenValidate.Output> {
    const firebaseConfig = {
      apiKey: env.firebase.apiKey,
      authDomain: env.firebase.authDomain,
      projectId: env.firebase.projectId,
      storageBucket: env.firebase.storageBucket,
      messagingSenderId: env.firebase.messagingSenderId,
      appId: env.firebase.appId
    }

    const firebase: FirebaseApp = initializeApp(firebaseConfig)

    const auth = getAuth(firebase)

    let result
    try {
      console.log('AuthenticateMiddleware input', input)
      const userCredential = await signInWithCustomToken(auth, input.token)
      console.log('userCredential', userCredential)
      const user = userCredential.user
      console.log(user)
      result = {
        displayName: user.displayName,
        email: user.email
      }
    } catch (error) {
      console.log(error)
    }
    return result
  }
}
