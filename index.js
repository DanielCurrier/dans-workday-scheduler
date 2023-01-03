
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


