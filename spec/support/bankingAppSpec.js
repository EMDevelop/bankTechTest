describe('BankAccountTransactions', () => {
  beforeEach(function () {
    app = new BankingApp();
  });

  // Outputs
  const header = 'date || credit || debit || balance\n';

  it('displays the title with no transactions', () => {
    expect(app.printMyAccountStatement()).toEqual(header);
  });
});
