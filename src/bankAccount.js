class BankAccount {
  constructor() {
    this.transactions = [];
  }

  getStatement() {
    const statement = new StatementReport();
    return statement.create(this.transactions);
  }

  storeTransaction(transaction) {
    this.transactions.push(transaction);
  }
}
