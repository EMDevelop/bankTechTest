class BankingApp {
  constructor() {
    this.account = new BankAccount();
  }

  printMyAccountStatement() {
    return this.account.getStatement();
  }

  makeDeposit(transactionDetails) {
    const transaction = this._createTransaction(transactionDetails);
    this.account.storeTransaction(transaction);
  }

  _createTransaction(transactionDetails, transactionType) {
    return new Transaction(transactionDetails, 'deposit');
  }
}
