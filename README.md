# bankTechTest

This is an example of a coding test, built in Javascript and tested using the Jasmine testing framework.

A user can add multiple transactions (both withdraws and deposits) and then, once finished transacting, request for a print out of their previous transactions.

I have had another go at the challenge with a different class structure. These files will sit at the root level of this repository, but if you'd like to see how they differ from the first attempt, check out the `/firstAttempt` directory.

## First Attempt Preview

![bankTest](https://github.com/EMDevelop/public_resources/blob/main/images/banking/bankTest.png)

# How to run

- clone this repo `git clone https://github.com/EMDevelop/bankTechTest.git`
- navigate to the repository: `cd bankTechTest`
- install dependencies `npm install`

### Run my First attempt

- run the below in your terminal:
  - `open firstAttempt/index.html`
  - follow the on-screen instructions

### Run my Second attempt

- run the below in your terminal:
  - `open index.html`
  - follow the on-screen instructions

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

| methods                                    | attributes          |
| ------------------------------------------ | ------------------- |
| recordTransaction({Date: , type: ,amount}) | Array: Transactions |
| printBankStatement()                       | Float: bankBalance  |

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
