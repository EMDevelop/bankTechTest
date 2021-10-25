# bankTechTest

This is an example coding test. it took me 4/5 hours.

A user can add multiple transactions (both withdraws and deposits) and then, once finished transacting, request for a print out of their previous transactions.

# Preview

![bankTest](https://github.com/EMDevelop/public_resources/blob/main/images/banking/bankTest.png)

# How to run

- clone this repo `git clone https://github.com/EMDevelop/bankTechTest.git`
- install dependencies `npm install`
- run code:
  - `open index.html`
  - Open the dev console (`fn + f12` on the keyboard)
  - In the console, write the below:

```
account = new BankAccount();
console.log(account.printBankStatement())
```

- add a new deposit

```
account.makeTransaction({date:'10/02/2012' , type: 'deposit', transactionAmount: 300})
```

- add a new withdrawal

```
account.makeTransaction({date:'10/02/2012' , type: 'withdraw', transactionAmount: 20})
```

- re-check your balance
  // Output:

```
date || credit || debit || balance
10/02/2012 || || 20.00 || 280.00
10/02/2012 || 300.00 || || 300.00
```

- check tests: `npx jasmine-browser-runner serve`

## Spec

Requirements
You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)

Deposits, withdrawal.

Account statement (date, amount, balance) printing.

Data can be kept in memory (it doesn't need to be stored to a database or anything).

Acceptance criteria

- Given a client makes a deposit of 1000 on 10-01-2023
- And a deposit of 2000 on 13-01-2023
- And a withdrawal of 500 on 14-01-2023
- When she prints her bank statement
- Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

## Eds Approach

#### Code structure

My code is structured into two different classes, BankAccount and Transactions.

Transactions are simply a record of information that each transaction would have. Had the data got more complicated, I'd likely refactor Transactions to be a parent class, and then have `CreditTransaction < Transaction` and `DebitTransaction < Transaction` as they share some attributes but not all.

The main class which is where my testing framework points, is the `BankAccount` class. The bank account class is responsible for receiving transaction requests from users. It is then responsibe for calculating the current balance based on each new transaction, and informing the requester of their current account balance.

#### Domain Modelling

I've mapped out the classes and methods I will need, roughly, as seen in my CRC cards below.

`bankAccount`

| methods                                  | attributes          |
| ---------------------------------------- | ------------------- |
| makeTransaction({Date: , type: ,amount}) | Array: Transactions |
| printBankStatement()                     | Float: bankBalance  |

`transactions`

| methods | attributes               |
| ------- | ------------------------ |
|         | Date: date               |
|         | String: type             |
|         | Float: transactionAmount |

#### Input / Output

I've mapped out inputs and outputs below, although if I were to do this again, I'd change the order to the order of my actual tests.

All Outputs have a title of :
date || credit || debit || balance

| Input                                                             | Output                                              | Notes | amount  |     |     |     | balance |     |     |
| ----------------------------------------------------------------- | --------------------------------------------------- | ----- | ------- | --- | --- | --- | ------- | --- | --- |
| {date: '10/01/2023', type: 'deposit', transactionAmount: 1000.00} | 10/01/2023                                          |       | 1000.00 |     |     |     | 1000.00 |     |
| {date: '10/01/2023', type: 'withdraw', transactionAmount: 500.00} | 10/01/2023                                          |       | 500.00  |     |     |     | -500.00 |     |     |
| Same as above two, but one after the other                        | Accumulated                                         |
| Add a third                                                       | Accumulated + order by most recent trasaction first |

-
