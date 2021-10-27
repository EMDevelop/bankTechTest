describe('BankAccountTransactions', () => {
  beforeEach(function () {
    app = new BankingApp();
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

  it('displays the title with no transactions', () => {
    expect(app.printMyAccountStatement()).toEqual(header);
  });

  it('add a single deposit', () => {
    const t1 = {
      date: '10/01/2023',
      type: 'deposit',
      transactionAmount: 1000.0,
    };
    spyOn(app, '_createTransaction').and.returnValue(t1);
    app.makeDeposit();
    expect(app.printMyAccountStatement()).toEqual(header + transactionOne);
  });

  it('subtract withdraw', () => {
    const t1 = {
      date: '10/01/2023',
      type: 'withdraw',
      transactionAmount: 500.0,
    };
    spyOn(app, '_createTransaction').and.returnValue(t1);
    app.makeWithdrawal();
    expect(app.printMyAccountStatement()).toBe(header + singleWithdraw);
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

    spyOn(app, '_createTransaction').and.returnValues(t1, t2);
    app.makeDeposit();
    app.makeWithdrawal();

    expect(app.printMyAccountStatement()).toBe(header + depositAndWithdraw);
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

    spyOn(app, '_createTransaction').and.returnValues(t1, t2, t3);
    app.makeDeposit();
    app.makeDeposit();
    app.makeWithdrawal();

    expect(app.printMyAccountStatement()).toBe(header + twoDepositsOneWithdraw);
  });
});
