import { InvalidOrder } from './errors'

export type OrderDirection = 'ASC' | 'DESC'

enum Order {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type OrderBy = keyof typeof translateFields

interface PageFilterInput {
  orderBy?: keyof typeof translateFields
  order?: OrderDirection | ''
}

interface PageFilterOutput {
  orderBy: string
  order: OrderDirection
}

const translateFields = {
  created_at: 'created_at',
  updated_at: 'updated_at',
  firstName: 'first_name',
  lastName: 'last_name',
  email: 'email',
  access: 'access',
  ip: 'ip',
  username: 'username'
}

export class OrderFilter {
  constructor (
    private readonly input: PageFilterInput
  ){}

  validate (): PageFilterOutput {
    if (this.input.orderBy == null) {
      this.input.orderBy = 'created_at'
    }
    if (this.input.order == null || this.input.order === '') {
      this.input.order = 'ASC'
    }
    if (!Object.keys(Order).includes(this.input.order)) {
      throw new InvalidOrder()
    }

    if (this.input.orderBy != null){
      if (translateFields[this.input.orderBy] !== null){
        this.input.orderBy = translateFields[this.input.orderBy] as OrderBy
      }
    }

    return {
      orderBy: this.input?.orderBy as string,
      order: this.input?.order
    }
  }
}
