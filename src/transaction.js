class Transaction {
  constructor(transactionDetails, transactionType) {
    this.date = transactionDetails.date;
    this.transactionAmount = transactionDetails.transactionAmount;
    this.type = transactionType;
  }
}
