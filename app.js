let hourel = document.querySelector("#hours");
let minutel = document.querySelector("#minutes");
let secel = document.querySelector("#seconts");
let ap = document.querySelector("#ampm");
function getTime(){
let currentTime = new Date();

let hour = currentTime.getHours();
let min = currentTime.getMinutes();
let sec = currentTime.getSeconds();
let ampm = "AM";
if(hour>12){
   hour = hour -12;
   ampm = "PM"
}
hourel.innerText = hour.toString().padStart(2,"0");
minutel.innerText = min.toString().padStart(2,"0");
secel.innerText = sec.toString().padStart(2,"0");
ap.innerText = ampm;
}

setInterval(getTime,1000);

