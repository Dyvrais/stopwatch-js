let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
let startTimer = document.querySelector(".start-timer");
let stopTimer = document.querySelector(".stop-timer");
let resetTimer = document.querySelector(".reset-timer");
let table = document.getElementById("timetable")
let timestamps = [];

   function pad(val) {
    return val > 9 ? val : "0" + val;
}

  function addTimestamp(){
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${timestamps}</td>
    `;

    table.appendChild(row);
  }

  startTimer.addEventListener("click", function(){
    counter = setInterval(function () {
      secondsLabel.innerHTML = pad(++totalSeconds % 60);
      minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60, 10));
      document.title = minutesLabel.innerHTML + ':' + secondsLabel.innerHTML;
  }, 1000);

    
  });

  stopTimer.addEventListener('click', function(){
    clearInterval(counter);
    timestamps.push(minutesLabel.innerHTML + ':' + secondsLabel.innerHTML);
    addTimestamp();
    timestamps.shift();
  });

  resetTimer.addEventListener("click", function(){
    clearInterval(counter);
    minutesLabel.innerHTML = '00';
    secondsLabel.innerHTML = '00';
    totalSeconds = 0;
    document.title = "Stopwatch";
  })