// To show date and time
function showDateTime() {
  // show time
  const timeElement = document.getElementById("time");
  const time = new Date();
  const options_time = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  timeElement.textContent = time.toLocaleTimeString("en-US", options_time);
  //Show date
  const dateElement = document.getElementById("date");
  const date = new Date();
  const options_date = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateElement.textContent = date.toLocaleDateString("en-US", options_date);
}

// Enable automatically change time and date
setInterval(showDateTime, 1000);
