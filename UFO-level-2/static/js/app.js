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

function populate() {
       // Select the input element and get the raw HTML node
       var indatehtml = d3.select("#datetime");
       var incityhtml = d3.select("#city");
       var instatehtml = d3.select("#state");
       var incountryhtml = d3.select("#country");
       var inshapehtml = d3.select("#shape");
       // Get the value property of the input element
       var indateValue = indatehtml.property("value")
       var incityValue = incityhtml.property("value")
       var instateValue = instatehtml.property("value")
       var incountryValue = incountryhtml.property("value")
       var inshapeValue = inshapehtml.property("value")


       inputarray = {
         datetime:  indateValue,
         city: incityValue,
         state: instateValue,
         country: incountryValue,
         shape: inshapeValue
       }
};

//$("#ufo-table tr").remove();
/*datetime: "1/13/2010",
        city: "gulf breeze",
        state: "fl",
        country: "us",
        shape: "unknown",
*/

// Complete the event handler function for the form
function runEnter() {
      
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    //populate the input array
    populate();
    //console.log(inputValue);
    //console.log(tableData);
    console.log(inputarray);

    Object.entries(inputarray).forEach(([key, value]) => {
      var tempData = tableData;
      if (value !== ''){
        console.log("filtering data", key);
        filteredData = tempData.filter(ufo => ufo.key === value);
        tempData = filteredData;
        /*if (key == datetime){
          filteredData = filteredData.filter(ufo => ufo.datetime === value);
        }
        else if (key.text === "state"){
          filteredData = filteredData.filter(ufo => ufo.state === value);
          console.log("hit state", key, value);
        }
        else if (key == 'country'){
          filteredData = filteredData.filter(ufo => ufo.country === value);
        }
        else if (key == shape){
          filteredData = filteredData.filter(ufo => ufo.shape === value);
        }
        else if (key == city){
          filteredData = filteredData.filter(ufo => ufo.city === value);
        }
        */
      }
    });
        //filteredData = tableData.filter(key === value)});
    
    //var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);


    buildTable(filteredData);

};

buildTable(tableData);
// YOUR CODE HERE!
//Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

//Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.



//Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.