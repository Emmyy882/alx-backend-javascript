export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Get the value of code attribute
   */
  get code() {
    return this._code;
  }

  /**
   * Set the value of code attribute
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Get the value for name attribute
   */
  get name() {
    return this._name;
  }

  /**
   * Set the value for name attribute
   */
  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
