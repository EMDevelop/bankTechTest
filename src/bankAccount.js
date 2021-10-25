class BankAccount {
  constructor() {
    this.transactions = [];
    this.STARTING_BALANCE = 0;
  }

  printBankStatement() {
    const header = 'date || credit || debit || balance\n';
    const transactionSummary = this._isNoTransactions()
      ? ''
      : this._loopTransactions();
    return header + transactionSummary;
  }

  makeTransaction(transactionDetails) {
    this.transactions.push(new Transaction(transactionDetails));
  }

  _loopTransactions() {
    let accumulatedTransactions = '';
    let currentBalance = this.STARTING_BALANCE;
    this.transactions.forEach((transaction) => {
      let transactionString =
        transaction.type === 'deposit'
          ? this._handleDeposit()
          : this._handleWithdraw();
      accumulatedTransactions += transactionString;
    });
    return accumulatedTransactions;
  }

  _handleDeposit() {
    return `${this.transactions[0].date} || ${this.transactions[0].transactionAmount}.00 || || ${this.transactions[0].transactionAmount}.00\n`;
  }

  _handleWithdraw() {
    return `${this.transactions[0].date} || || ${this.transactions[0].transactionAmount}.00 || -${this.transactions[0].transactionAmount}.00\n`;
  }

  _isNoTransactions() {
    return this.transactions.length === 0;
  }
}
