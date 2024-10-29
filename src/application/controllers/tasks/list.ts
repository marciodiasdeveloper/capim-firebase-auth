import { Controller } from '@/application/controllers'
import { HttpResponse, okNoContent } from '@/application/helpers'
import { TasksList, Validator } from '@/domain/contracts/gateways'
import { TasksListUseCase } from '@/domain/use-cases'

type HttpRequest = TasksList.Input

type Model = Error | TasksList.Output

export class TasksListController extends Controller {
  constructor (private readonly store: TasksListUseCase) {
    super()
  }

  async perform (input: HttpRequest): Promise<HttpResponse<Model>> {
    await this.store(input)
    return okNoContent()
  }

  override buildValidators (input: HttpRequest): Validator[] {
    return []
  }
}
