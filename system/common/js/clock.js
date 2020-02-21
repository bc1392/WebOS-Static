// Clock update function.
function updateClock() {

    let cDate = new Date();
    
    let suffix = cDate.getHours() >= 12 ? "PM":"AM";
    let minifx = cDate.getMinutes() > 9 ? "":"0";
    let hours = ((cDate.getHours() + 11) % 12 + 1);
    let minutes = cDate.getMinutes();

    $('#clock').text(hours + ':' + minifx + minutes + ' ' + suffix);

}

// Init and interval.
updateClock();
setInterval(updateClock, 15000);