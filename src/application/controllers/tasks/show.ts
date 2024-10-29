import { Controller } from '@/application/controllers'
import { HttpResponse, okNoContent } from '@/application/helpers'
import { TasksShow, Validator } from '@/domain/contracts/gateways'
import { TasksShowUseCase } from '@/domain/use-cases'
import { ValidationBuilder as Builder } from '@/application/validation'

type HttpRequest = TasksShow.Input

type Model = Error | TasksShow.Output

export class TasksShowController extends Controller {
  constructor (private readonly store: TasksShowUseCase) {
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
