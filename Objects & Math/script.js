// Task 1
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber
    this.balance = balance
    this.owner = owner
// Task 2
    this.deposit = function deposit(depositAmount) {
        this.balance += depositAmount
        console.log("Account: " + this.accountNumber + ". New Balance: " + this.balance + ". Have a pleasant day " + this.owner + "!");
    }

    this.withdraw = function withdraw(withdrawAmount) {
        this.balance -= withdrawAmount;
        console.log("Account: " + this.accountNumber + ". New Balance: " + this.balance + ". Have a pleasant day " + this.owner + "!");
    }

// Task 3: interest compounds once annually
    this.compoundInterest = function compoundInterest(interestRate, compoundFrequency, time) {
        this.balance *= Math.pow((1 + interestRate / compoundFrequency), compoundFrequency * time);
        console.log("After " + time + " years, the account, " + this.accountNumber + ", will have a balance of: " + (this.balance.toFixed(2)))
    }
}

let account = new Account("1", 50, "Joe Bob");
let depositAmount = 150;
let withdrawAmount = 100;
let interestRate = .05;
let time = 5;
let compoundFrequency = 1;
account.deposit(depositAmount);
account.withdraw(withdrawAmount);
account.compoundInterest(interestRate, compoundFrequency, time);

