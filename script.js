// set up jQuery
$(document).ready(function () {

  // add moment date to header
  var currentDate = moment().format('MMMM DD, YYYY');
  $("#currentDate").text(currentDate);

// adds moment time to header
  var currentTime = moment().format('h:mm a');
  $("#currentTime").text(currentTime);

  var currentHour = moment().format('H');

// save and set entry into local storage
  $(".btnSubmit1").on("click", function() {
    var userText = $(".entry5a").val();
    localStorage.setItem("data5am", JSON.stringify({ task: userText}));
  });
// save and get entry into local storage
  var saved = JSON.parse(localStorage.getItem('data5am'));
  $(".entry5a").val(saved.task);

// 6 AM
  $(".btnSubmit2").on("click", function() {
    var userText = $(".entry6a").val();
    localStorage.setItem("data6am", JSON.stringify({ task: userText}));
  })
  var saved = JSON.parse(localStorage.getItem('data6am'));
  $(".entry6a").val(saved.task);

// 7 AM
  $(".btnSubmit3").on("click", function() {
    var userText = $(".entry7a").val();
    localStorage.setItem("data7am", JSON.stringify({ task: userText}));
  })
  var saved = JSON.parse(localStorage.getItem('data7am'));
  $(".entry7a").val(saved.task);

// 8 AM  
  $(".btnSubmit4").on("click", function() {
    var userText = $(".entry8a").val();
    localStorage.setItem("data8am", JSON.stringify({ task: userText}));
  })
  var saved = JSON.parse(localStorage.getItem('data8am'));
  $(".entry8a").val(saved.task);

// 9 AM
  $(".btnSubmit5").on("click", function() {
    var userText = $(".entry9a").val();
    localStorage.setItem("data9am", JSON.stringify({ task: userText}));
  })
  var saved = JSON.parse(localStorage.getItem('data9am'));
  $(".entry9a").val(saved.task);

// 10 AM
$(".btnSubmit6").on("click", function() {
  var userText = $(".entry10a").val();
  localStorage.setItem("data10am", JSON.stringify({ task: userText}));
})
var saved = JSON.parse(localStorage.getItem('data10am'));
$(".entry10a").val(saved.task);

// 11 AM 
$(".btnSubmit7").on("click", function() {
  var userText = $(".entry11a").val();
  localStorage.setItem("data11am", JSON.stringify({ task: userText}));
})
var saved = JSON.parse(localStorage.getItem('data11am'));
$(".entry11a").val(saved.task);

// 12 PM 
$(".btnSubmit8").on("click", function() {
  var userText = $(".entry12p").val();
  localStorage.setItem("data12pm", JSON.stringify({ task: userText}));
})
var saved = JSON.parse(localStorage.getItem('data12pm'));
$(".entry12p").val(saved.task);

// 1 PM
$(".btnSubmit9").on("click", function() {
  var userText = $(".entry1p").val();
  localStorage.setItem("data1pm", JSON.stringify({ task: userText}));
})
var saved = JSON.parse(localStorage.getItem('data1pm'));
$(".entry1p").val(saved.task);

// 2 PM
$(".btnSubmit10").on("click", function() {
  var userText = $(".entry2p").val();
  localStorage.setItem("data2pm", JSON.stringify({ task: userText}));
})
var saved = JSON.parse(localStorage.getItem('data2pm'));
$(".entry2p").val(saved.task);

// 3 PM
$(".btnSubmit11").on("click", function() {
  var userText = $(".entry3p").val();
  localStorage.setItem("data3pm", JSON.stringify({ task: userText}));
})
var saved = JSON.parse(localStorage.getItem('data3pm'));
$(".entry3p").val(saved.task);

// 4 PM
$(".btnSubmit12").on("click", function() {
  var userText = $(".entry4p").val();
  localStorage.setItem("data4pm", JSON.stringify({ task: userText}));
})
var saved = JSON.parse(localStorage.getItem('data4pm'));
$(".entry4p").val(saved.task);

// 5 PM
$(".btnSubmit13").on("click", function() {
  var userText = $(".entry5p").val();
  localStorage.setItem("data5pm", JSON.stringify({ task: userText}));
})
var saved = JSON.parse(localStorage.getItem('data5pm'));
$(".entry5p").val(saved.task);

// 6 PM
$(".btnSubmit14").on("click", function() {
  var userText = $(".entry6p").val();
  localStorage.setItem("data6pm", JSON.stringify({ task: userText}));
})
var saved = JSON.parse(localStorage.getItem('data6pm'));
$(".entry6p").val(saved.task);

// 7 PM
$(".btnSubmit15").on("click", function() {
  var userText = $(".entry7p").val();
  localStorage.setItem("data7pm", JSON.stringify({ task: userText}));
})
var saved = JSON.parse(localStorage.getItem('data7pm'));
$(".entry7p").val(saved.task);

// 8 PM
$(".btnSubmit16").on("click", function() {
  var userText = $(".entry8p").val();
  localStorage.setItem("data8pm", JSON.stringify({ task: userText}));
})
var saved = JSON.parse(localStorage.getItem('data8pm'));
$(".entry8p").val(saved.task);

// 9 PM
$(".btnSubmit17").on("click", function() {
  var userText = $(".entry9p").val();
  localStorage.setItem("data9pm", JSON.stringify({ task: userText}));
})
var saved = JSON.parse(localStorage.getItem('data9pm'));
$(".entry9p").val(saved.task);

// 10 PM 
$(".btnSubmit18").on("click", function() {
  var userText = $(".entry19p").val();
  localStorage.setItem("data10pm", JSON.stringify({ task: userText}));
})
var saved = JSON.parse(localStorage.getItem('data10pm'));
$(".entry10p").val(saved.task);

// 11 PM
$(".btnSubmit19").on("click", function() {
  var userText = $(".entry11p").val();
  localStorage.setItem("data11pm", JSON.stringify({ task: userText}));
})
var saved = JSON.parse(localStorage.getItem('data11pm'));
$(".entry11p").val(saved.task);





  // for loop to set background colors comparing time
for (var i = 0; i < 13; i++) {

  if (14 < currentHour) {
    // make the background of the div gray
    $(".entry5a").addClass("past");
    // bkgrnd-color gray;
  }
  if (14 === currentHour){
    console.log("hi");
    // make the background of the div blue
    $(".entry5a").addClass("present");
    // bkgrnd-color blue;
    // make the background of the div green
  }
  if (14 > currentHour) {
    $(".entry5a").addClass("future");
  }
};
  });