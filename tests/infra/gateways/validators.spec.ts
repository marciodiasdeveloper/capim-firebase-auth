import { Validators } from '@/infra/gateways'

// import { ValidationBuilder } from '@/application/validation'

// jest.spyOn(ValidationBuilder, 'of').mockReturnValue({
//   fieldName: 'myField', validators: [], value: 'value'
// })

describe('Validators', () => {
  let sut: Validators

  beforeEach(() => {
    sut = new Validators()
  })

  it('should construct validation input', async () => {
    const encrpted = sut.builderValidator({
      fieldName: 'myField',
      value: 'value'
    })

    expect(encrpted).toEqual({ fieldName: 'myField', validators: [], value: 'value' })
  })
  it('should create compositeValidator', async () => {
    const encrpted = sut.compositeValidator({
      validators: []
    })

    expect(encrpted).toEqual({
      validators: []
    })
  })
})
