// set up jQuery
$(document).ready(function () {

  // add moment date to header
  var currentDate = moment().format('MMMM DD, YYYY');
  $("#currentDate").text(currentDate);

// adds moment time to header
  var currentTime = moment().format('h:mm:ss a');
  $("#currentTime").text(currentTime);

  var currentHour = moment().format('H');
  console.log(currentHour);

// save entry into local storage
  $(".btnSubmit1").on("click", function() {
    var userText = $(".entry5").val();
    localStorage.setItem("data5am", JSON.stringify({ task: userText}));
    console.log("hello");
  });
    
  var saved = JSON.parse(localStorage.getItem('data5am'));
  console.log(saved.task);
  $(".entry5").val(saved.task);
//     localStorage.setItem("entry", entry);
//   });

for (var i = 0; i < 12; i++) {
  currentHour = parseInt(currentHour);
  console.log(typeof currentHour);
  console.log(currentHour);
  console.log(14 < currentHour);
  console.log(14 === currentHour);
  console.log(14 > currentHour);
  if (14 < currentHour) {
    // make the background of the div gray
    $(".entry5").addClass("past");
    // bkgrnd-color gray;
  }
  if (14 === currentHour){
    console.log("hi");
    // make the background of the div blue
    $(".entry5").addClass("present");
    // bkgrnd-color blue;
    // make the background of the div green
  }
  if (14 > currentHour) {
    $(".entry5").addClass("future");
  }
};




// // loop through 12 times to create 12 rows, 3 columns  
// // for (var i = 0; i < 12; i++){
// // create 1 row
// /* var row = document.createElement("tr")
// $(".table1").append(row); */

//   // define the div
//   // add the row class
//   // for loop for j x column
//   //for (var j = 0; j < 3; j++){
//     // define the div
//     // add the column class
//  // };
// //}

//   // Create a button on the last column that when you click it, inputs will save
//   // When you click it: Need to add an event listener
  
// // Want the colors to represent past, present, future
//   // If the time is less than current, it is past
//   // If the time is greater than current, it is future
//   // If time is equal to current, it is present


  });