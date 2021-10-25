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
    const t1 = {
      date: '10/01/2023',
      type: 'deposit',
      transactionAmount: 1000.0,
    };
    spyOn(bankAccount, '_createTransaction').and.returnValue(t1);
    bankAccount.recordTransaction();
    expect(bankAccount.printBankStatement()).toBe(header + transactionOne);
  });

  it('subtract withdraw', () => {
    const t1 = {
      date: '10/01/2023',
      type: 'withdraw',
      transactionAmount: 500.0,
    };
    spyOn(bankAccount, '_createTransaction').and.returnValue(t1);
    bankAccount.recordTransaction();
    expect(bankAccount.printBankStatement()).toBe(header + singleWithdraw);
  });

  it('deposits 1000 then withdraws 500', () => {
    const t1 = {
      date: '10/01/2023',
      type: 'deposit',
      transactionAmount: 1000.0,
    };
    const t2 = {
      date: '14/01/2023',
      type: 'withdraw',
      transactionAmount: 500.0,
    };

    spyOn(bankAccount, '_createTransaction').and.returnValues(t1, t2);
    bankAccount.recordTransaction();
    bankAccount.recordTransaction();

    expect(bankAccount.printBankStatement()).toBe(header + depositAndWithdraw);
  });

  it('deposits 1000 then deposits 2000 then withdraws 500', () => {
    const t1 = {
      date: '10/01/2023',
      type: 'deposit',
      transactionAmount: 1000.0,
    };
    const t2 = {
      date: '13/01/2023',
      type: 'deposit',
      transactionAmount: 2000.0,
    };
    const t3 = {
      date: '14/01/2023',
      type: 'withdraw',
      transactionAmount: 500.0,
    };

    spyOn(bankAccount, '_createTransaction').and.returnValues(t1, t2, t3);
    bankAccount.recordTransaction();
    bankAccount.recordTransaction();
    bankAccount.recordTransaction();

    expect(bankAccount.printBankStatement()).toBe(
      header + twoDepositsOneWithdraw
    );
  });
});
