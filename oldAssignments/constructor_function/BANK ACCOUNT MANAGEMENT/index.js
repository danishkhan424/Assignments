// Create a constructor function called BankAccount that takes accountNumber, name, type, and balance as arguments.

function BankAccount(accN, name, type, bal) {
  this.accountNumber = accN;
  this.name = name;
  this.type = type;
  this.balance = bal;
  this.active = true;
}

// deposit(amount) - Deposits the specified amount into the account.
// withdraw(amount) - Withdraws the specified amount from the account if the balance is sufficient.
// checkBalance() - Prints the account's balance.
// isActive() - Checks and returns whether the account is active.

BankAccount.prototype.deposit = function (amt) {
  this.balance += amt;
  console.log(`Deposited: ${amt} and Available Balance is: ${this.balance}`);
};

BankAccount.prototype.withdraw = function (amt) {
  if (amt <= this.balance) {
    this.balance -= amt;
    console.log(`Withdrawal: ${amt} and Available Balance is: ${this.balance}`);
  } else {
    console.log("Insufficient Balance");
  }
  if (this.balance == 0) {
    this.active = false;
  }
};

BankAccount.prototype.checkBalance = function () {
  console.log(`Your balance is: ${this.balance}`);
};

BankAccount.prototype.isActive = function () {
  if (this.balance <= 0) {
    this.active = false;
    console.log("Your account is not active.");
  } else {
    console.log("Your account is active.");
  }
};

function getTotalBalance(...acc) {
  return acc.reduce((totalSum, account) => {
    if (account.active == true) {
      return (totalSum += account.balance);
    }
    return totalSum;
  }, 0);
}

let p1 = new BankAccount(1234, "danish", "savings", 500);
let p2 = new BankAccount(4321, "aman", "current", 800);



p1.deposit(500);
p1.withdraw(400);
p2.deposit(600);
p2.withdraw(1400);

p1.isActive();
p2.isActive();

console.log(getTotalBalance(p1, p2));
