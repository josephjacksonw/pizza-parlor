Describe Pizza()

Test: "It should create a pizza object with size, # of toppings, and the list of toppings"
Code: const pizza1 = new Pizza("Large", 2, ["Pepperoni", "Bacon"])
Expected Output: Pizza {size: "Large", toppings: 2, items: ["Pepperoni"", "Bacon"]}

Describe Cost()

Test: "It should calculate the cost of the pizza based on the size and number of toppings"
Code: Cost(pizza1)
Exptected Output: $17

Describe Order()

Test: "It should create an object with each pizza created"
Code: const allPizzas = new Order()
Expected Output: Order {}

Describe Order.prototype.addPizza()

Test: "It should add a pizza object to the order object"
Code: allPizzas.addPizza(pizza1)
Expected Output: allPizzas {pizza1}