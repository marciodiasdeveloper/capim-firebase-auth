import { ArrayValidation } from './array'
import { DateValidation } from './date'
import { NullValidation } from './null'
import { ObjectValidation } from './object'
import { ValidateKeyAndTypeError } from '../errors/validate-key-type'

/* eslint-disable valid-typeof */
const baseTypes = ['string', 'number', 'object', 'boolean', 'undefined']
const customTypes = ['null', 'array', 'date']

type BaseTypes = 'string' | 'number' | 'object' | 'boolean' | 'undefined'
type CustomTypes = 'null' | 'array' | 'date'

type ValidTypesString = BaseTypes | CustomTypes
type ValidTypes = string | number | object | boolean | undefined

type BaseRecord<T> = Record<string, T>

type ValidRecord<T> = Record<keyof T, ValidTypes>

export class SanitizeObject {
  constructor (
    private readonly rules: BaseRecord<ValidTypesString>
  ) {}

  sanitize (data: BaseRecord<ValidTypes>): ValidRecord<keyof BaseRecord<ValidTypesString>> {
    const newObject: BaseRecord<ValidTypes> = {}
    Object.keys(this.rules).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        if (baseTypes.includes(this.rules[key])) {
          // rome-ignore lint/suspicious/useValidTypeof: <explanation>
          if (typeof data[key] !== this.rules[key]){
            throw new ValidateKeyAndTypeError(key, this.rules[key])
          }
        }

        if (customTypes.includes(this.rules[key])) {
          switch (this.rules[key]) {
            case 'array':
              if (new ArrayValidation(data[key]).validate()) {
                throw new ValidateKeyAndTypeError(key, this.rules[key])
              }
              break
            case 'date':
              if (new DateValidation(data[key]).validate()) {
                throw new ValidateKeyAndTypeError(key, this.rules[key])
              }
              break
            case 'null':
              if (new NullValidation(data[key]).validate()) {
                throw new ValidateKeyAndTypeError(key, this.rules[key])
              }
              break
            case 'object':
              if (new ObjectValidation(data[key]).validate()) {
                throw new ValidateKeyAndTypeError(key, this.rules[key])
              }
              break

            default:
              break
          }
        }
        newObject[key] = data[key]
      }
    })
    return newObject as any
  }
}
