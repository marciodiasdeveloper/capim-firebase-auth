import { Validator, AllowedMimeTypes, Extension, MaxFileSize, Required, RequiredBuffer, RequiredString, UuidValidation, EmailValidation, OptionValidation, NumberValidation, StringValidation, BooleanValidation } from '@/application/validation'
import { CpfValidation } from './cpf'
import { DateValidation } from './date'
import { MaxCharacter } from './max-char'
import { MinCharacter } from './min-char'

const TYPES = ['number', 'string', 'boolean']
export class ValidationBuilder {
  private constructor (
    private readonly value: any,
    private readonly fieldName?: string,
    private readonly validators: Validator[] = []
  ) { }

  static of ({ value, fieldName }: { value: any, fieldName?: string }): ValidationBuilder {
    return new ValidationBuilder(value, fieldName)
  }

  required (): ValidationBuilder {
    if (this.value instanceof Buffer) {
      this.validators.push(new RequiredBuffer(this.value, this.fieldName))
    } else if (typeof this.value === 'string') {
      this.validators.push(new RequiredString(this.value, this.fieldName))
    } else {
      this.validators.push(new Required(this.value, this.fieldName))
      if (this.value?.buffer !== undefined) {
        this.validators.push(new RequiredBuffer(this.value.buffer, this.fieldName))
      }
    }
    return this
  }

  image ({ allowed, maxSizeInMb }: { allowed: Extension[], maxSizeInMb: number }): ValidationBuilder {
    if (this.value.mimeType !== undefined) {
      this.validators.push(new AllowedMimeTypes(allowed, this.value.mimeType))
    }
    if (this.value.buffer !== undefined) {
      this.validators.push(new MaxFileSize(maxSizeInMb, this.value.buffer))
    }
    return this
  }

  email (): ValidationBuilder {
    if (this.fieldName !== undefined) {
      this.validators.push(new EmailValidation(this.value))
    }
    return this
  }

  cpf (): ValidationBuilder {
    if (this.fieldName !== undefined) {
      this.validators.push(new CpfValidation(this.value, this.fieldName ?? 'cpf'))
    }
    return this
  }

  date (): ValidationBuilder {
    if (this.fieldName != null && this.value != null) {
      this.validators.push(new DateValidation(this.value, this.fieldName ?? 'date'))
    }
    return this
  }

  min (minChacters: number): ValidationBuilder {
    if (typeof this.value !== 'string') {
      return this
    }
    if (`${this.value}`.length !== minChacters) {
      this.validators.push(new MinCharacter(minChacters, `${this.value}`))
    }
    return this
  }

  max (maxChacters: number): ValidationBuilder {
    if (typeof this.value !== 'string') {
      return this
    }
    if (`${this.value}`.length !== maxChacters) {
      this.validators.push(new MaxCharacter(maxChacters, `${this.value}`))
    }
    return this
  }

  option (options: string[]): ValidationBuilder {
    if (this.fieldName != null && this.value != null) {
      if (!TYPES.includes(typeof this.value)) {
        return this
      }
      if (typeof options === 'object' && Array.isArray(options)) {
        this.validators.push(new OptionValidation(options, `${this.value as string}`))
      }
    }

    return this
  }

  uuid (): ValidationBuilder {
    if (this.fieldName != null && this.value != null) {
      this.validators.push(new UuidValidation(this.value, this.fieldName ?? 'uuid'))
    }
    return this
  }

  number (): ValidationBuilder {
    if (this.fieldName != null && this.value != null) {
      this.validators.push(new NumberValidation(this.value, this.fieldName))
    }
    return this
  }

  string (): ValidationBuilder {
    if (this.fieldName != null && this.value != null) {
      this.validators.push(new StringValidation(this.value, this.fieldName))
    }
    return this
  }

  boolean (): ValidationBuilder {
    if (this.fieldName != null && this.value != null) {
      this.validators.push(new BooleanValidation(this.value, this.fieldName))
    }
    return this
  }

  build (): Validator[] {
    return this.validators
  }
}
