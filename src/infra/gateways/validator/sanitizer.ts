export interface Sanitizer {
  sanitizer: <T>(input: Sanitizer.Input) => T
}

type BaseTypes = 'string' | 'number' | 'object' | 'boolean' | 'undefined'
type CustomTypes = 'null' | 'array' | 'date'

type ValidTypesString = BaseTypes | CustomTypes
type ValidTypes = string | number | object | boolean | undefined

type BaseRecord<T> = Record<string, T>

type ValidRecord<T> = Record<keyof T, ValidTypes>

export namespace Sanitizer {
  export type Input = {
    rules: BaseRecord<ValidTypesString>
    data: object
  }
  export type Output = undefined | ValidRecord<object>
}
