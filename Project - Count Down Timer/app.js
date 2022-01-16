function cdTimer(){

var todayD = new Date();    // Lates Date

var tDay = todayD.getDate()
var tHour = todayD.getHours();
var tMinute = todayD.getMinutes();
var tSeconds = todayD.getSeconds();

var lastDay =  new Date(2018, 9, 25, 6, 0);     // Last Date

var lDay = lastDay.getDate();
var lHour = lastDay.getHours();
var lMinute = lastDay.getMinutes();

if(lHour <= 12){
  lHour += 12;
}

if(tHour >= 12){
  tHour -= 12;
}



var finalD = (lDay - tDay).toString();      // For Calculation
var finalH = (lHour - tHour).toString();
var finalM = ((lMinute + 60) - tMinute).toString();
var finalS = (60 - tSeconds).toString();

var dayString;        // If statements for selection b/w singular and plural
if (finalD > 1) {
  dayString = "Days";
}
else {
  dayString = "Day";
}

var hourString;
if (finalH > 1) {
  hourString = "Hrs";
}
else {
  hourString = "Hr";
}

var minString;
if (finalM > 1) {
  minString = "Mins";
}
else {
  minString = "Min";
}


var cdt = document.querySelector('#CDT h1');    // Placing the values
var timer = finalD + ' '+ dayString + ' ' + finalH + ' '+ hourString + ' ' +
finalM + ' '+ minString + ' ' + finalS + ' Secs' ;
cdt.textContent = timer ;}

cdTimer();
setInterval(cdTimer, 1000);
