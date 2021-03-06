class BankAccount {
  constructor() {
    this.transactions = [];
    this.STARTING_BALANCE = 0;
  }

  recordTransaction(transactionDetails) {
    this.transactions.push(this._createTransaction(transactionDetails));
  }

  printBankStatement() {
    const header = 'date || credit || debit || balance\n';
    const transactionSummary = this._isNoTransactions()
      ? ''
      : this._loopTransactions();
    return header + transactionSummary;
  }

  _createTransaction(transactionDetails) {
    return new Transaction(transactionDetails);
  }

  _loopTransactions() {
    let [accumulatedTransactions, currentBalance] = ['', this.STARTING_BALANCE];
    this.transactions.forEach((transaction) => {
      // calling Update New Balance
      currentBalance = this._updateBalance(
        currentBalance,
        transaction.transactionAmount,
        transaction.type
      );
      accumulatedTransactions = // calling print function
        this._generatePrintStatement(transaction, currentBalance) +
        accumulatedTransactions;
    });
    return accumulatedTransactions;
  }

  _updateBalance(currentBalance, transactionAmount, transactionType) {
    return transactionType === 'deposit'
      ? (currentBalance += transactionAmount)
      : (currentBalance -= transactionAmount);
  }

  _generatePrintStatement(transaction, currentBalance) {
    return transaction.type === 'deposit'
      ? this._printDeposit(transaction, currentBalance)
      : this._printWithdraw(transaction, currentBalance);
  }

  _printDeposit(transaction, currentBalance) {
    return `${transaction.date} || ${transaction.transactionAmount}.00 || || ${currentBalance}.00\n`;
  }

  _printWithdraw(transaction, currentBalance) {
    return `${transaction.date} || || ${transaction.transactionAmount}.00 || ${currentBalance}.00\n`;
  }

  _isNoTransactions() {
    return this.transactions.length === 0;
  }
}
