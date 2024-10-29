interface PageFilterInput {
  page?: number
  rowsPerPage?: number
  search?: string
}

interface PageFilterOutput {
  page: number
  rowsPerPage: number
  search?: string
}

export class PageFilter {
  constructor (
    private readonly input: PageFilterInput
  ){}

  validate (): PageFilterOutput {
    if (this.input.page == null) {
      this.input.page = 1
    }

    if (isNaN(Number(this.input.page))) {
      this.input.page = 1
    }

    if (this.input.page < 1) {
      this.input.page = 1
    }

    if (this.input.rowsPerPage == null) {
      this.input.rowsPerPage = 10
    }

    if (isNaN(Number(this.input.rowsPerPage))) {
      this.input.rowsPerPage = 10
    }

    if (this.input.rowsPerPage < 1) {
      this.input.rowsPerPage = 10
    }

    return {
      page: this.input?.page ?? 1,
      rowsPerPage: this.input?.rowsPerPage ?? 10,
      search: this.input?.search ?? undefined
    }
  }
}
