describe('BankAccountTransactions', () => {
  beforeEach(function () {
    app = new BankingApp();
  });

  // Outputs
  const header = 'date || credit || debit || balance\n';
  const transactionOne = '10/01/2023 || 1000.00 || || 1000.00\n';
  const singleWithdraw = '10/01/2023 || || 500.00 || -500.00\n';

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
});
