
function Order() {
  this.pizzas = {};
  this.currentId = 0;
  this.totalCost = 0
}


Order.prototype.addContact = function(pizza) {
  pizza.id = this.pizzaId();
  this.pizzas[pizza.id] = pizza;
  this.totalCost += pizza.cost
};

Order.prototype.pizzaId = function() {
  this.currentId += 1;
  return this.currentId;
};

function Pizza(size, toppings, items) {
  this.size = size
  this.toppings = toppings
  this.items = items
  this.cost = 0
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
    cost += parseInt(pizza.toppings)
  }
  return cost
};



// User Interface Logic
let allPizzas = new Order();
let toppingCounter = 0
let toppings = []

function handleFormSubmission(event) {
  event.preventDefault();
  const size = document.querySelector("input[name='size']:checked").value;
  console.log(size)
  //const toppings = document.querySelector("input#toppings").value;
  let newpizza = new Pizza(size, toppingCounter, toppings)
  newpizza.cost = cost(newpizza)
  console.log(newpizza)
  allPizzas.addContact(newpizza)

  console.log(allPizzas)
  console.log("this pizza's cost" + cost(newpizza))
  toppingCounter = 0
  toppings = []
};

function addTopping(event) {
  event.preventDefault();
  console.log("button identified")
  let topping = document.getElementById("t1").value;
  //let topping = document.querySelector("input#new-top").value;
  toppings.push(topping)
  toppingCounter += 1
  console.log(toppings, toppingCounter)
}

window.addEventListener("load", function() {
  document.querySelector("form#new-pizza").addEventListener("submit", handleFormSubmission);
  document.querySelector("form#new-top").addEventListener("submit", addTopping);
});