import { PageFilter } from '@/domain/entities'

describe('PageFilter', () => {
  it('should validate empty page', () => {
    const getUrl = new PageFilter({}).validate()
    expect(getUrl).toEqual({ page: 1, rowsPerPage: 10, search: undefined })
  })
  it('should validate page', () => {
    const getUrl = new PageFilter({
      page: 2
    }).validate()
    expect(getUrl).toEqual({ page: 2, rowsPerPage: 10, search: undefined })
  })
  it('should validate page negative', () => {
    const getUrl = new PageFilter({
      page: -1
    }).validate()
    expect(getUrl).toEqual({ page: 1, rowsPerPage: 10, search: undefined })
  })
  it('should validate rowsPerPage', () => {
    const getUrl = new PageFilter({
      rowsPerPage: 50
    }).validate()
    expect(getUrl).toEqual({ page: 1, rowsPerPage: 50, search: undefined })
  })
  it('should validate search', () => {
    const getUrl = new PageFilter({
      search: 'search'
    }).validate()
    expect(getUrl).toEqual({ page: 1, rowsPerPage: 10, search: 'search' })
  })
})
