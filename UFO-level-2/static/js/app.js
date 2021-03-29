// from data.js
var tableData = data;

// Add table to html body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

// Iterate through each UFO
tableData.forEach((item) => {
  // Append one table row per sighting
  var row = tbody.append("tr");

  // append one cell for the student and one cell for the grade
  row.append("td").text(item.datetime);
  row.append("td").text(item.city);
  row.append("td").text(item.state);
  row.append("td").text(item.country);
  row.append("td").text(item.shape);
  row.append("td").text(item.durationMinutes);
  row.append("td").text(item.comments);
});

//Create a button that can filter on date
// Select the button
var button = d3.select("#filter-btn");

// Create event handler
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input elements and get the raw HTML node
  var inputElementDate = d3.select("#datetime");
  var inputElementCity = d3.select("#city");
  var inputElementState = d3.select("#state");
  var inputElementCountry = d3.select("#country");
  var inputElementShape = d3.select("#shape");

  // Get the value property of the input element
  var inputValueDate = inputElementDate.property("value");
  var inputValueCity = inputElementCity.property("value");
  var inputValueState = inputElementState.property("value");
  var inputValueCountry = inputElementCountry.property("value");
  var inputValueShape = inputElementShape.property("value");

  //   console.log(inputValue);

  let filteredData = tableData.filter(
    (item) =>
      item.datetime === inputValueDate &&
      item.city === inputValueCity &&
      item.state === inputValueState &&
      item.country === inputValueCountry &&
      item.shape === inputValueShape
  );

  // clear the existing output
  tbody.html("");

  // Show filtered data
  filteredData.forEach((item) => {
    var tr = tbody.append("tr");
    tr.append("td").text(item.datetime);
    tr.append("td").text(item.city);
    tr.append("td").text(item.state);
    tr.append("td").text(item.country);
    tr.append("td").text(item.shape);
    tr.append("td").text(item.durationMinutes);
    tr.append("td").text(item.comments);
  });
}
