describe('Creating Bank Statement', () => {
  beforeEach(function () {
    bankAccount = new BankAccount();
  });

  const header = 'date || credit || debit || balance\n';
  const transactionOne = '10/01/2023 || 1000.00 || || 1000.00\n';
  // const transactionTwo = '13/01/2023 || 2000.00 || || 3000.00\n';
  // const transactionThree = '14/01/2023 || || 500.00 || 2500.00\n';

  it('Titles Displaying', () => {
    expect(bankAccount.printBankStatement()).toEqual(header);
  });

  it('add deposit', () => {
    bankAccount.makeTransaction({
      date: '10/01/2023',
      type: 'deposit',
      transactionAmount: 1000.0,
    });
    expect(bankAccount.printBankStatement()).toBe(header + transactionOne);
  });
});
