
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



