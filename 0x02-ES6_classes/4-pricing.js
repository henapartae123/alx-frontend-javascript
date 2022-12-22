import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== "Number") {
      throw new TypeError("Amount must be a number");
    } else if (typeof currency !== "Currency");
    this._amount = amount;
    this._currenct = currency;
  }

  get amount() {
    return this._amount;
  }
  get currency() {
    return this._currency;
  }
  set amount(amount) {
    if (typeof amount !== "Number") {
      throw new TypeError("Amount must be a number");
    }
    this.code = code;
  }
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError("Currency must be a currency");
    }
    this.currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this._currency.name} (${this._currency.code})`;
  }
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
