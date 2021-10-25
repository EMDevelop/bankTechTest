describe('Creating Bank Statement', () => {
  beforeEach(function () {
    bankAccount = new BankAccount();
  });

  // Outputs
  const header = 'date || credit || debit || balance\n';
  const transactionOne = '10/01/2023 || 1000.00 || || 1000.00\n';
  const singleWithdraw = '10/01/2023 || || 500.00 || -500.00\n';
  const depositAndWithdraw =
    '14/01/2023 || || 500.00 || 500.00\n' + transactionOne;

  const transactionTwo = '13/01/2023 || 2000.00 || || 3000.00\n';
  const transactionThree = '14/01/2023 || || 500.00 || 2500.00\n';
  const twoDepositsOneWithdraw =
    transactionThree + transactionTwo + transactionOne;

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

  it('subtract withdraw', () => {
    bankAccount.makeTransaction({
      date: '10/01/2023',
      type: 'withdraw',
      transactionAmount: 500.0,
    });
    expect(bankAccount.printBankStatement()).toBe(header + singleWithdraw);
  });

  it('deposits 1000 then withdraws 500', () => {
    bankAccount.makeTransaction({
      date: '10/01/2023',
      type: 'deposit',
      transactionAmount: 1000.0,
    });
    bankAccount.makeTransaction({
      date: '14/01/2023',
      type: 'withdraw',
      transactionAmount: 500.0,
    });
    expect(bankAccount.printBankStatement()).toBe(header + depositAndWithdraw);
  });

  it('deposits 1000 then deposits 2000 then withdraws 500', () => {
    bankAccount.makeTransaction({
      date: '10/01/2023',
      type: 'deposit',
      transactionAmount: 1000.0,
    });
    bankAccount.makeTransaction({
      date: '13/01/2023',
      type: 'deposit',
      transactionAmount: 2000.0,
    });
    bankAccount.makeTransaction({
      date: '14/01/2023',
      type: 'withdraw',
      transactionAmount: 500.0,
    });
    expect(bankAccount.printBankStatement()).toBe(
      header + twoDepositsOneWithdraw
    );
  });
});
