//your JS code here. If required.


// Get the element by its ID
let element = document.getElementById("level");

// Initialize level counter
let level = 0;

// Traverse up the DOM tree until there are no more parents
while (element) {
    level++;
    element = element.parentElement;
}

// Show the result
alert("The level of the element is: " + level);

