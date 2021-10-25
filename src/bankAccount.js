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

    this.transactions.forEach((transaction, index) => {
      // Update balance
      currentBalance = this._updateBalance(
        currentBalance,
        transaction.transactionAmount,
        transaction.type
      );
      // Generate line in bank statement
      accumulatedTransactions += this._generatePrintStatement(
        transaction,
        currentBalance
      );
    });
    return accumulatedTransactions;
  }

  _generatePrintStatement(transaction, currentBalance) {
    return transaction.type === 'deposit'
      ? this._printDeposit(transaction, currentBalance)
      : this._printWithdraw(transaction, currentBalance);
  }

  _updateBalance(currentBalance, transactionAmount, transactionType) {
    return transactionType === 'deposit'
      ? (currentBalance += transactionAmount)
      : (currentBalance -= transactionAmount);
  }

  _printDeposit(transaction, currentBalance) {
    let newBalance = currentBalance + transaction.transactionAmount;
    return `${transaction.date} || ${transaction.transactionAmount}.00 || || ${currentBalance}.00\n`;
  }

  _printWithdraw(transaction, currentBalance) {
    let newBalance = currentBalance - transaction.transactionAmount;
    return `${transaction.date} || || ${transaction.transactionAmount}.00 || ${currentBalance}.00\n`;
  }

  _isNoTransactions() {
    return this.transactions.length === 0;
  }
}
