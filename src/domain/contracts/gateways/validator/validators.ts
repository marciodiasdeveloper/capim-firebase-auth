import { ValidationBuilder, ValidationComposite } from '@/application/validation'

export { ValidationBuilder }
export interface BuilderValidator {
  builderValidator: (input: BuilderValidator.Input) => BuilderValidator.Output
}

export namespace BuilderValidator {
  export type Input = {
    value: string
    fieldName?: string
  }
  export type Output = ValidationBuilder
}

export interface CompositeValidator {
  compositeValidator: (input: CompositeValidator.Input) => CompositeValidator.Output
}

export namespace CompositeValidator {
  export type Input = {
    validators: Validator[]
  }
  export type Output = ValidationComposite
}

export interface Validator {
  validate: () => Error | undefined
}
