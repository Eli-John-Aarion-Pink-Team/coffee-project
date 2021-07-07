"use strict"

// Add functionality to search through the coffees by name, and
// display only the coffees that match the provided search term
// (You will need to add an input field to the existing form for this)
//
// Add functionality to update the displayed coffee as the user types into the search
// box, or as soon as they select an option from the select.


 function renderCoffee(coffee) {

    var html = '<div class="coffee">';
    html += '<p class="coffee-name">' + coffee.name + '</p>';
    html += '<p class="coffee-roast">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}



function searchCoffees() {
    var searchValue = search.value
    var filteredCoffees = [];
    console.log(searchValue)
    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().includes(searchValue.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === "all") {
            coffees.forEach(function (name) {
                filteredCoffees.push(name)
            });
        }
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee() {
    var filteredCoffees = [];
    var newCoffeeValue = additionSubmit.value;
    console.log(additionSubmit.value);

}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var coffeeDiv = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var search = document.querySelector('#searchBar')
var dropSelection = document.querySelector('#roast-selection')
var additionSubmit = document.querySelector('#submit-addition')

coffeeDiv.innerHTML = renderCoffees(coffees);

additionSubmit.addEventListener('click', addCoffee)
dropSelection.addEventListener('change', updateCoffees)
// submitButton.addEventListener('click', updateCoffees);
search.addEventListener('keyup', searchCoffees)