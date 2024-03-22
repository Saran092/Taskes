let countdown;

function startTimer() {
  const minutes = parseInt(document.getElementById('minutes').value);
  const seconds = parseInt(document.getElementById('seconds').value);

  let totalSeconds = minutes * 60 + seconds;

  countdown = setInterval(() => {
    totalSeconds--;

    const displayMinutes = Math.floor(totalSeconds / 60);
    const displaySeconds = totalSeconds % 60;

    document.getElementById('minutes').value = displayMinutes;
    document.getElementById('seconds').value = displaySeconds;

    if (totalSeconds <= 0) {
      clearInterval(countdown);
      alert('Time is up!..');
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(countdown);
}

function resetTimer() {
  clearInterval(countdown);
  document.getElementById('minutes').value = 0;
  document.getElementById('seconds').value = 0;
}