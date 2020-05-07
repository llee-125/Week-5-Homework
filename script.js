// set up jQuery
$(document).ready(function () {

  // add moment date to header
  var currentDate = moment().format('MMMM DD, YYYY');
  $("#currentDate").text(currentDate);

// adds moment time to header
  var currentTime = moment().format('h:mm:ss a');
  $("#currentTime").text(currentTime);

// save entry into local storage
  $("#btnSubmit1").on("click", function() {
    var userText = $("#entry5").val();
    localStorage.setItem("data5", JSON.stringify({ task: userText}));
    console.log("hello");
  });
    


//     var entry = $(".entry").val();
//     localStorage.setItem("entry", entry);
//   });






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

//   // if (time < currentHour) {
//   //   // make the background of the div gray
//   //   // bkgrnd-color gray;
//   // } else if (time = currentHour){
//   //   // make the background of the div blue
//   //   // bkgrnd-color blue;
//   //   // make the background of the div green
//   // } else ;
//   //   // bkgrnd-color green
  });