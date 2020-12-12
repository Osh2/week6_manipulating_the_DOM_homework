document.addEventListener('DOMContentLoaded', () => {
    const burgerInput = document.querySelector("#add_burger");
    burgerInput.addEventListener("submit", handleInput);
});

const handleInput = function(event) {
    event.preventDefault();
    const burgerListItem = document.createElement("li");
    const burgerList = document.querySelector("#burger_list"); 

    const burgerName = document.createElement("h2");
    burgerName.textContent = event.target.burger_name.value;

    const burgerBun = document.createElement("p");
    burgerBun.textContent = `Bun: ${event.target.bun.value}`;

    const burgerPatty = document.createElement("p");
    burgerPatty.textContent = `Patty: ${event.target.patty.value}`;

    const burgerToppings = document.createElement("p");
    burgerToppings.textContent = `Toppings: ${event.target.toppings.value}`;

    const burgerSauces = document.createElement("p");
    burgerSauces.textContent = `Sauces: ${event.target.sauces.value}`;

    const burgerExtras = document.createElement("p");
    burgerExtras.textContent = `Extras ${event.target.extra.value}`;

    burgerListItem.appendChild(burgerName);
    burgerListItem.appendChild(burgerBun);
    burgerListItem.appendChild(burgerPatty);
    burgerListItem.appendChild(burgerToppings);
    burgerListItem.appendChild(burgerSauces);
    burgerListItem.appendChild(burgerExtras);
    burgerList.appendChild(burgerListItem);
    
    
    const deleteButton = document.createElement("input");
    deleteButton.type = "submit";
    deleteButton.value = "Delete";
    

    burgerList.appendChild(deleteButton);
    
    event.target.reset()
    
}