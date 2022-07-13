const Bank = function () {
  let money = 500;

  const depositCash = function (inc) {
    money += inc;
  };
  const checkBalance = function () {
    console.log(money);
  };
  return (cash = {
    deposit: depositCash,
    showBalance: checkBalance,
  });
};
const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950
