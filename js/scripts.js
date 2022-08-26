
function Order() {
  this.pizzas = {};
  this.currentId = 0;
}


Order.prototype.addContact = function(pizza) {
  pizza.id = this.pizzaId();
  this.pizzas[pizza.id] = pizza;
};

Order.prototype.pizzaId = function() {
  this.currentId += 1;
  return this.currentId;
};






function Pizza(size, toppings) {
  this.size = size
  this.toppings = toppings
  this.items = []
};

function cost(pizza) {
  let cost = 10
  if (pizza.size === "large") {
    cost += 4
    cost += pizza.toppings * 1.50
  } else if (pizza.size === "medium") {
    cost += 2
    cost += pizza.toppings * 1.25
  } else {
    cost += pizza.toppings
  }
  return cost
};



// User Interface Logic
let allPizzas = new Order();

function handleFormSubmission(event) {
  event.preventDefault();
  const size = document.querySelector("input#size").value;
  const toppings = document.querySelector("input#toppings").value;
  let newpizza = new Pizza(size, toppings)
  console.log(newpizza)
  newpizza.items.push("pepperoni")
  newpizza.items.push("pineapple")
  console.log(newpizza)
  console.log(newpizza.items.length)
  allPizzas.addContact(newpizza)
  console.log(allPizzas)
  console.log(cost(newpizza))
};

window.addEventListener("load", function() {
  document.querySelector("form#new-pizza").addEventListener("submit", handleFormSubmission);
});