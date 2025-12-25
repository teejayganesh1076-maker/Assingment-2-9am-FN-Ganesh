class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    return `deposited money  ${this.balance}`;
  }
  withdraw(amount) {
    if (this.balance < 0) {
      console.log("Insufficient Balance..");
    }
    this.balance -= amount;
    return `withdraw remaining ${this.balance}`;
  }
}
const bank = new BankAccount("ganesh", 0);
console.log("owner name :" + bank.owner);
console.log("deposit amount : " + bank.deposit(2000));
console.log("withdraw balance amount : " + bank.withdraw(300));