function displayClock(){
    var currentDate = new Date();
    var hours = timeDisplayFormat(currentDate.getHours());
    var minutes = timeDisplayFormat(currentDate.getMinutes());
    var seconds = timeDisplayFormat(currentDate.getSeconds());

    var displayedClock = hours + " : " + minutes + " : " + seconds;
    document.getElementById("clock").innerHTML = displayedClock;
}

/* check if current value of time units (hours, minutes or seconds...) are  single digit and add 0 in the beggining if so */
function timeDisplayFormat(timeUnit){
    if(parseInt(timeUnit,"10")<10){
        return "0" + timeUnit;
    }

    return timeUnit;
}

function clockInterval(){
    var timer = setInterval(displayClock,1000);

}