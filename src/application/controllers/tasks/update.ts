import { Controller } from '@/application/controllers'
import { HttpResponse, okNoContent } from '@/application/helpers'
import { TasksUpdate, Validator } from '@/domain/contracts/gateways'
import { TasksUpdateUseCase } from '@/domain/use-cases'
import { ValidationBuilder as Builder } from '@/application/validation'

type HttpRequest = TasksUpdate.Input

type Model = Error | TasksUpdate.Output

export class TasksUpdateController extends Controller {
  constructor (private readonly store: TasksUpdateUseCase) {
    super()
  }

  async perform (input: HttpRequest): Promise<HttpResponse<Model>> {
    await this.store(input)
    return okNoContent()
  }

  override buildValidators (input: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: input.id, fieldName: 'id' }).required().build(),
      ...Builder.of({ value: input.title, fieldName: 'title' }).required().build(),
      ...Builder.of({ value: input.description, fieldName: 'description' }).required().build(),
      ...Builder.of({ value: input.status, fieldName: 'status' }).required().build(),
      ...Builder.of({ value: input.dueDate, fieldName: 'dueDate' }).required().build()
    ]
  }
}
