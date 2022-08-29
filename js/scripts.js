// Business Logic 
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
  if (pizza.size === "Large") {
    cost += 4
    cost += pizza.toppings * 1.50
  } else if (pizza.size === "Medium") {
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

function showPizza (ordered) {
  const div = document.createElement("div")
  let placement = document.getElementById("putOthersHere")
  const h5 = document.createElement("h5")
  h5.innerText = ordered.size + " Pizza"
  const ul = document.createElement("ul")
  ordered.items.forEach(function (i){
    const size = ordered.size;
    const li = document.createElement("li");
    li.append(i)
    ul.append(li)
  })
  const p = document.createElement("p")
  p.innerText = "Cost: $" + ordered.cost.toFixed(2)
  placement.append(div)
  div.append(h5)
  div.append(ul)
  div.append(p)
}

function handleFormSubmission(event) {
  event.preventDefault();
  const size = document.querySelector("input[name='size']:checked").value;
  let newpizza = new Pizza(size, toppingCounter, toppings)
  newpizza.cost = cost(newpizza)
  allPizzas.addContact(newpizza)
  toppingCounter = 0
  toppings = []
  showPizza(newpizza)
  document.getElementById("orderTotal").innerText = allPizzas.totalCost.toFixed(2);
  document.getElementById("orderTotalId").removeAttribute("class");
  document.getElementById("showToppings").setAttribute("class", "hidden")
  let orderClear = document.getElementById("toppingView")
  orderClear.innerHTML = "";
};

function addTopping(event) {
  event.preventDefault();
  let topping = document.getElementById("t1").value;
  toppings.push(topping)
  toppingCounter += 1
  document.getElementById("showToppings").removeAttribute("class")
  let ul = document.getElementById("toppingView")
  const li = document.createElement("li")
  li.innerText = topping
  ul.append(li)
}

window.addEventListener("load", function() {
  document.querySelector("form#new-pizza").addEventListener("submit", handleFormSubmission);
  document.querySelector("form#new-top").addEventListener("submit", addTopping);
});