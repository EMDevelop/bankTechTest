class StatementReport {
  constructor() {
    this.header = 'date || credit || debit || balance\n';
  }

  create(transactions) {
    let transactionHistory = '';
    if (transactions.length === 0) return this.header;
    if (transactions[0].type === 'withdraw') {
      console.log('a');
      transactionHistory = `${transactions[0].date} || || ${transactions[0].transactionAmount}.00 || -${transactions[0].transactionAmount}.00\n`;
    }
    if (transactions[0].type === 'deposit') {
      console.log('b');
      transactionHistory = `${transactions[0].date} || ${transactions[0].transactionAmount}.00 || || ${transactions[0].transactionAmount}.00\n`;
    }
    return this.header + transactionHistory;
  }
}
