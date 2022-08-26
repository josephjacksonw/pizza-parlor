# _Pizza Parlor_
 
#### By _**Joseph Jackson**_
 
#### _This is a website to design Pizzas._
 
## Technologies Used
 
* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
 
 
## Description
 
_A site where a user can design a pizza with multiple toppings and get a price based on their creation._
 
## Setup/Installation Requirements
 
* _Go to my Repository page on [Git Hub](https://github.com/josephjacksonw/pizza-parlor)_
* _Click on the pizza-Parlor repository_
* _You can clone the project yourself to your desktop, if you would like to see how it interacts in the webrowser_
* _Once you have the project cloned open up the folder located on your desktop called pizza-parlor._
* _Once you have the folder open click on the index.html file. This should open up your web browser and you can interact with the site._ 
 
## Known Bugs
 
* _No known issues_

## TDD

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

Describe Order.prototype.pizzaId()

Test: "It should give each pizza an id when placed in the order for easier sorting
Code: pizza.id = this.pizzaId()
Expexted Output: 1

## License

_MIT_

Copyright (c) _08/26/2022_ _Joseph Jackson_