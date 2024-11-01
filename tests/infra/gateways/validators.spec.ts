import { Validators } from '@/infra/gateways'
describe('Validators', () => {
  let sut: Validators

  beforeEach(() => {
    sut = new Validators()
  })

  it('should construct validation input', async () => {
    const encrypted = sut.builderValidator({
      fieldName: 'myField',
      value: 'value'
    })

    expect(encrypted).toEqual({ fieldName: 'myField', validators: [], value: 'value' })
  })
  it('should create compositeValidator', async () => {
    const encrypted = sut.compositeValidator({
      validators: []
    })

    expect(encrypted).toEqual({
      validators: []
    })
  })

  jest.mock('@/application/sanitize-object')

  describe('Validators', () => {
    let sut: Validators

    beforeEach(() => {
      sut = new Validators()
    })

    it('should construct validation input', async () => {
      const encrypted = sut.builderValidator({
        fieldName: 'myField',
        value: 'value'
      })

      expect(encrypted).toEqual({ fieldName: 'myField', validators: [], value: 'value' })
    })

    it('should create compositeValidator', async () => {
      const encrypted = sut.compositeValidator({
        validators: []
      })

      expect(encrypted).toEqual({
        validators: []
      })
    })

    // it('should sanitize input data', async () => {
    //   const sanitizeObjectMock = jest.fn().mockReturnValue({
    //     sanitize: jest.fn().mockReturnValue({ sanitized: 'data' })
    //   })
    //   ;(SanitizeObject as jest.Mock).mockImplementation(sanitizeObjectMock)

    //   const input = {
    //     rules: { rule: 'rule' },
    //     data: { data: 'data' }
    //   }
    //   const sanitized = sut.sanitizer<typeof input.data>(input)

    //   expect(sanitized).toEqual({ sanitized: 'data' })
    //   expect(SanitizeObject).toHaveBeenCalledWith(input.rules)
    //   expect(sanitizeObjectMock().sanitize).toHaveBeenCalledWith(input.data)
    // })
  })
})
