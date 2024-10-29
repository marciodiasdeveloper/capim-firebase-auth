import { FirebaseApp, initializeApp } from 'firebase/app'
import { env } from '@/main/config/env'

import {
  setupUserStore,
  UserStoreUseCase
} from '@/domain/use-cases'

export const makeUserStoreUseCase = (): UserStoreUseCase => {
  const firebaseConfig = {
    apiKey: env.firebase.apiKey,
    authDomain: env.firebase.authDomain,
    projectId: env.firebase.projectId,
    storageBucket: env.firebase.storageBucket,
    messagingSenderId: env.firebase.messagingSenderId,
    appId: env.firebase.appId
  }

  const firebase: FirebaseApp = initializeApp(firebaseConfig)

  return setupUserStore({ firebase })
}
