class BankAccount {
  constructor() {
    this.transactions = [];
    this.STARTING_BALANCE = 0;
  }

  printBankStatement() {
    const header = 'date || credit || debit || balance\n';
    // const transactionSummary = this._loopTransactions();
    // console.log(header + header);
    return header;
  }

  makeTransaction(transactionDetails) {
    this.transactions.push(new Transaction(transactionDetails));
  }

  _loopTransactions() {
    const transactionSummary = '';
    return `${this.transactions[0].date} || ${this.transactions[0].amount} || || ${this.transactions[0].amount}\n`;
    // this.transactions.forEach(transaction => {

    // });
  }
}
