import { FirebaseApp, initializeApp } from 'firebase/app'
import { env } from '@/main/config/env'

import {
  setupTasksListUseCase,
  TasksListUseCase
} from '@/domain/use-cases'

export const makeTasksListUseCase = (): TasksListUseCase => {
  const firebaseConfig = {
    apiKey: env.firebase.apiKey,
    authDomain: env.firebase.authDomain,
    projectId: env.firebase.projectId,
    storageBucket: env.firebase.storageBucket,
    messagingSenderId: env.firebase.messagingSenderId,
    appId: env.firebase.appId
  }

  const firebase: FirebaseApp = initializeApp(firebaseConfig)

  return setupTasksListUseCase({ firebase })
}
