class BankAccount {
  constructor() {
    this.statementGenerator = new StatementReport();
    this.transactions = [];
  }

  getStatement() {
    return this.statementGenerator.create(this.transactions);
  }

  storeTransaction(transaction) {
    this.transactions.push(transaction);
  }
}
