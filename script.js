// VARIABLES ----
const textEf = document.getElementById("text");
const speedEf = document.getElementById("speed");
const text = "You can do the ting!";
let idx = 1;
let speed = 300 / speedEf.value;
//---------------

writeText();

// FUNCTIONS------
function writeText() {
  textEf.innerText = text.slice(0, idx);

  idx++; // post-increment

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed); // Function setTimeout will set a timer and once the timer runs out, the function will run.
}
//---------------
speedEf.addEventListener("input", (e) => (speed = 300 / e.target.value));
