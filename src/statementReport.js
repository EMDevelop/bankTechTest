class StatementReport {
  constructor() {
    this.header = 'date || credit || debit || balance\n';
  }

  create(transactions) {
    if (transactions.length === 0) return this.header;
    // const transactionHistory = this._generateReport()
    if (transactions[0].type === 'withdraw') {
      return (
        this.header +
        `${transactions[0].date} || || ${transactions[0].transactionAmount}.00 || -${transactions[0].transactionAmount}.00\n`
      );
    }
    return (
      this.header +
      `${transactions[0].date} || ${transactions[0].transactionAmount}.00 || || ${transactions[0].transactionAmount}.00\n`
    );
  }

  // _generateReport(){

  // }
}
