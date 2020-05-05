$(document).ready(function () {
  console.log ("JQ is hooked up properly");

  var date = moment().format("MMM Do YYYY");
  console.log(date);

// loop through 12 times to create 12 rows, 3 columns  
// for (var i = 0; i < 12; i++){
// create 1 row
/* var row = document.createElement("tr")
$(".table1").append(row); */

  // define the div
  // add the row class
  // for loop for j x column
  //for (var j = 0; j < 3; j++){
    // define the div
    // add the column class
 // };
//}

// Want the user to be able to edit the rows
  // Fix the HTML so middle column are all textareas
// Want the inputs to be saved in local storage
  // Create a button on the last column that when you click it, inputs will save
  // When you click it: Need to add an event listener
  $(".btn-sv").on("click", function() {
    // Now I want to add local storage
    var entry = $(".entry").val();
    localStorage.setItem("entry", entry);
  })
// Want the colors to represent past, present, future
  // If the time is less than current, it is past
  // If the time is greater than current, it is future
  // If time is equal to current, it is present
});
