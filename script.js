$(document).ready(function () {

  var date = moment().format("MMM DD YYYY");
  console.log(date);

  var currentHour = moment().startOf("hour");
  var time =

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

  // Create a button on the last column that when you click it, inputs will save
  // When you click it: Need to add an event listener
  $(".btn-sv").on("click", function(event) {
    event.preventDefault();
    // Now I want to add local storage
    var entry = $(".entry").val();
    localStorage.setItem("entry", entry);
  });
// Want the colors to represent past, present, future
  // If the time is less than current, it is past
  // If the time is greater than current, it is future
  // If time is equal to current, it is present

  // if (time < currentHour) {
  //   // make the background of the div gray
  //   // bkgrnd-color gray;
  // } else if (time = currentHour){
  //   // make the background of the div blue
  //   // bkgrnd-color blue;
  //   // make the background of the div green
  // } else ;
  //   // bkgrnd-color green
  });


