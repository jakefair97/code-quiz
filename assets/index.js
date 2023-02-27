var timer = document.getElementById("timer");
var startBtn = document.getElementById("start");
var mainEl = document.getElementById("main");


var time = 0;
timer.textContent = 'Time: ' + time;

startBtn.addEventListener('click', function() {
    mainEl.remove();
    time = 75;
    timer.textContent = "Time: " + time;
})