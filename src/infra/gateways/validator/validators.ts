import { BuilderValidator, CompositeValidator, Sanitizer } from '@/domain/contracts/gateways'
import { ValidationBuilder, ValidationComposite, SanitizeObject } from '@/application/validation'

export class Validators implements BuilderValidator, CompositeValidator {
  builderValidator (input: BuilderValidator.Input): BuilderValidator.Output {
    return ValidationBuilder.of(input)
  }

  compositeValidator (input: CompositeValidator.Input): CompositeValidator.Output {
    return new ValidationComposite(input.validators)
  }

  sanitizer <T>(input: Sanitizer.Input): T {
    return new SanitizeObject(input.rules).sanitize(input.data as any) as T
  }
}
