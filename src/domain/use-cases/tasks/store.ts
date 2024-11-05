import { TasksStore } from '@/domain/contracts/gateways'
import { getAuth } from 'firebase/auth'
import { doc, Firestore, getFirestore, setDoc } from 'firebase/firestore'

type Setup = (firebase: any) => TasksStoreUseCase
type Input = TasksStore.Input
type Output = TasksStore.Output

export type TasksStoreUseCase = (input: Input) => Promise<Output>

export const setupTasksStoreUseCase: Setup = ({ firebase }) => async input => {
  const auth = getAuth(firebase)
  const db: Firestore = getFirestore(firebase)

  console.log(auth)
  const task = await setDoc(doc(db, 'tasks', user.uid), {
    userId: user.uid,
    email: input.title,
    description: input.description,
    status: input.status,
    dueDate: input.dueDate
  })

  return task
}
