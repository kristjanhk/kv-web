export class Validation {
  [key: string]: string

  static getMessages(): Validation {
    return {
      required: 'Required',
      greaterThanEqualTo: 'Must be <= {{1}}',
      date: 'Invalid',
      numeric: 'Invalid'
    }
  }
}
