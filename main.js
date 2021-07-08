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
    // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === "all") {
            filteredCoffees.push(coffee);
            // coffee.forEach(function (name) {
            //     filteredCoffees.push(name)});
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        // Event.preventDefault();
    });

    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
}

var usageCount = 0; // to prevent filling the page with new coffee
function addCoffee() {

    if (usageCount > 0) {
        document.location.reload(true);
    }
    let newCoffee = {
        id: 15,
        name: document.getElementById('name-addition').value,
        roast: document.getElementById('roast-addition').value
    }
    coffees.push(newCoffee)

    coffeeDiv.innerHTML = renderCoffees(coffees);
    usageCount++;

    // let h = renderCoffee(coffee)
    // console.log(document.getElementById('roast-addition').value)
    // console.log(h)
    // let coffeeDiv = document.getElementById('coffees');
    // coffeeDiv.innerHTML += h

}

window.addEventListener('keydown',function(e){if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){if(e.target.nodeName=='INPUT'&&e.target.type=='text'){e.preventDefault();return false;}}},true);



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

window.addEventListener('keydown',function(e){if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){if(e.target.nodeName=='INPUT'&&e.target.type=='text'){e.preventDefault();return false;}}},true);

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