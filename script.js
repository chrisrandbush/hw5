//On ready
$(document).ready(function() {

//Save button functionality
$(".saveBtn").on("click", function() {
//Get nearby values
var value = $(this).siblings(".description").val();
var time  = $(this).parent().attr("id");


//Save to local storage
localStorage.setItem(time, value);


})
//Hour updater
function hourUpdater() {
    
    //Gets current number of hours
    var currentHour = moment().hours();
  
    //loop over time blocks
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        
        //Check to see if we've passed this time
        if (blockHour < currentHour) {
            $(this).addClass("past");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
//calling hourUpdater
hourUpdater();


//Loading local storage saved
for (var i = 9; i <= 17; i++) {
    $('#hour-' + i + ' .description').val(localStorage.getItem('hour-' + i));
    
}



//Displaying current day on page
$("#currentDay").text(moment().format("dddd, MMMM Do"));


});