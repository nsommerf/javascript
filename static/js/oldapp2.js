// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

//Input values
inputarray = {}

// print full table
//tableData.forEach((ufodata) => {
//  var row = tbody.append("tr");
//  Object.entries(ufodata).forEach(([key, value]) => {
//    var cell = row.append("td");
//    cell.text(value);
//  });
//}); 

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function buildTable(data) {
  tbody.html("")
  data.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  }); 

};

function populate(inputarray) (
       // Select the input element and get the raw HTML node
       var inputElement = d3.select("#datetime");
  
       // Get the value property of the input element
       var inputValue = inputElement.property("value")
   
)

//$("#ufo-table tr").remove();
/*datetime: "1/13/2010",
        city: "gulf breeze",
        state: "fl",
        country: "us",
        shape: "unknown",
*/

// Complete the event handler function for the form
function runEnter(inputarray) {
      
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
 
    //console.log(inputValue);
    //console.log(tableData);

    Object.entries(inputarray).forEach(([key, value]) => {
        filteredData = tableData.filter()};
    

    console.log(filteredData);


    buildTable(filteredData);

};

buildTable(tableData);
// YOUR CODE HERE!
//Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

//Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.



//Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.