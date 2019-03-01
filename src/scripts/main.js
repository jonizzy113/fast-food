const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.order.push(meal)
    },
    order: [],
    getOrder: function(){
      return this.order
    }
}

const chickenComboMeal = {
    sandwhichType: "chicken Sandwhich",
    fries: true,
    drinksize: "large"
}

const burgerComboMeal = {
    sandwhichType: "burger",
    fries: false,
    drinksize: "small"
}

const saladCombomeal = {
    sandwhichType: "salad",
    fries: false,
    drinksize: "x-large"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(burgerComboMeal)
restaurant.placeOrder(saladCombomeal)
console.table(restaurant.getOrder())

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()