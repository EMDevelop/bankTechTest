class BankAccount {
  constructor() {
    this.statementGenerator = new StatementReport();
  }

  getStatement() {
    return this.statementGenerator.balanceReport();
  }
}
