class BankingApp {
  constructor() {
    this.account = new BankAccount();
  }

  printMyAccountStatement() {
    return this.account.getStatement();
  }
}
