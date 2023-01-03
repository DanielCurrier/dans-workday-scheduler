
const store = window.localStorage;
const container = $(".container");

const now = moment();
const currentTime = now.format("HH");

$('#currentDay').text(now.format("dddd MMMM DD, YYYY"));

$("#clearFieldsBtn").click((event) => {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
});

$(".time-div").each(function () {
    const timeDiv = $(this).attr("id").split("-")[1];

    if (currentTime === timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("white-text");
    } else if (currentTime < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (currentTime > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});

$(".save-btn").click((event) => {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
});


$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));
$("#hour-18 .time-block").val(localStorage.getItem("18"));
$("#hour-19 .time-block").val(localStorage.getItem("19"));
$("#hour-20 .time-block").val(localStorage.getItem("20"));
$("#hour-21.time-block").val(localStorage.getItem("21"));