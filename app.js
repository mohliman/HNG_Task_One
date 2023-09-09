let dateObj = new Date();
let day = dateObj.getDay();
let timeInMilliseconds = dateObj.getUTCMilliseconds();
let daysOfTheWeek =  ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dateDisplay = document.getElementById('day');
let timeDisplay = document.getElementById('time')



function getDay(){
    dateDisplay.innerHTML = daysOfTheWeek[day];
}

function getUtcTime(){
    timeDisplay.innerHTML = timeInMilliseconds;
}



getDay();
getUtcTime();