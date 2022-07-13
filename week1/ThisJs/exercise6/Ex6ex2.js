const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12,
  },

  makeDrink: function (drinkType) {
    flag = false;
    for (let requirements in this.drinkRequirements) {
      if (drinkType === requirements) {
        console.log(this.beans);
        flag = true;
        if (coffeeShop.beans < this.drinkRequirements[requirements])
          alert("Sorry, we’re all out of beans!");
        else coffeeShop.beans -= this.drinkRequirements[requirements];
      }
    }
    if (!flag)
      alert(
        "Sorry, we don’t make because " + drinkType + " not in requirements"
      );
  },
  buyBeans: function (numBeans) {
    this.beans += numBeans;
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(20);
coffeeShop.makeDrink("frenchPress");
