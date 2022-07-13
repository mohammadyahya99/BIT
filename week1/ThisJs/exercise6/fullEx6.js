const coffeeShop = {
  beans: 40,
  money: 30,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 5 },
    doubleShot: { beanRequirement: 15, price: 5 },
    frenchPress: { beanRequirement: 12, price: 5 },
  },

  makeDrink: function (drinkType) {
    flag = false;
    for (let requirements in this.drinkRequirements) {
      if (drinkType === requirements) {
        console.log("the total beans before make dring is : " + this.beans);
        flag = true;
        if (
          coffeeShop.beans <
          this.drinkRequirements[requirements].beanRequirement
        ) {
          alert("Sorry, we’re all out of beans!");
        } else {
          coffeeShop.beans -=
            this.drinkRequirements[requirements].beanRequirement;
          console.log("the total beans after make dring is : " + this.beans);
        }
      }
    }
    if (!flag)
      alert(
        "Sorry, we don’t make because " + drinkType + " not in requirements"
      );
  },
  buyBeans: function (numBeans) {
    //i decide that the cost of bean equal 3$
    let total = 3 * numBeans;
    console.log(
      " the total beans and money before buy bean is :" +
        this.money +
        " " +
        this.beans
    );
    if (this.money < total) {
      alert("Sorry the money not enough");
    } else {
      this.beans += numBeans;
      this.money -= total;
      alert("succes purchase");
      console.log(
        " the total beans and money after buy bean is :" +
          this.money +
          " " +
          this.beans
      );
    }
  },
  buyDrink: function (drinkType) {
    for (let requirements in this.drinkRequirements) {
      if (drinkType === requirements) {
        console.log(" the total money before sell drink is :" + this.money);
        this.money += this.drinkRequirements[requirements].price;
        alert("sucess buy drink");
        console.log(" the total money after sell drink is :" + this.money);
        this.makeDrink(drinkType);
      }
    }
  },
};
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(11); //should alert/console "Sorry the money not enough"
coffeeShop.buyBeans(9);
coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("doubleShot");
