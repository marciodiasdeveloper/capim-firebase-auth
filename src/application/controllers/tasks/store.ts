import { Controller } from '@/application/controllers'
import { HttpResponse, okNoContent } from '@/application/helpers'
import { TasksStore, Validator } from '@/domain/contracts/gateways'
import { TasksStoreUseCase } from '@/domain/use-cases'
import { ValidationBuilder as Builder } from '@/application/validation'

type HttpRequest = TasksStore.Input

type Model = Error | TasksStore.Output

export class TasksStoreController extends Controller {
  constructor (private readonly store: TasksStoreUseCase) {
    super()
  }

  async perform (input: HttpRequest): Promise<HttpResponse<Model>> {
    await this.store(input)
    return okNoContent()
  }

  override buildValidators (input: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: input.title, fieldName: 'title' }).required().build(),
      ...Builder.of({ value: input.description, fieldName: 'description' }).required().build(),
      ...Builder.of({ value: input.status, fieldName: 'status' }).required().build(),
      ...Builder.of({ value: input.dueDate, fieldName: 'dueDate' }).required().build()
    ]
  }
}
