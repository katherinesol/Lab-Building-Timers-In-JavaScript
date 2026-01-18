
// Function: countdownTimer
// Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.

function countdownTimer(startTime, interval) {
  let remaining = startTime;

  const timerId = setInterval(() => {
    console.log(remaining);
    remaining--;

    if (remaining <= 0) {
      clearInterval(timerId);
    }
  }, interval);

  return timerId;
}

module.exports = { countdownTimer };
