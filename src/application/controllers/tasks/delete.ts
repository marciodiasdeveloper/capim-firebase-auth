import { Controller } from '@/application/controllers'
import { HttpResponse, okNoContent } from '@/application/helpers'
import { TasksDelete, Validator } from '@/domain/contracts/gateways'
import { TasksDeleteUseCase } from '@/domain/use-cases'
import { ValidationBuilder as Builder } from '@/application/validation'

type HttpRequest = TasksDelete.Input

type Model = Error | TasksDelete.Output

export class TasksDeleteController extends Controller {
  constructor (private readonly store: TasksDeleteUseCase) {
    super()
  }

  async perform (input: HttpRequest): Promise<HttpResponse<Model>> {
    await this.store(input)
    return okNoContent()
  }

  override buildValidators (input: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: input.id, fieldName: 'id' }).required().build()
    ]
  }
}
