
function checkTime(i){
  return i < 10 ? "0" + i : i;
}

function startClock(){
let now= new Date()

let hrs=now.getHours();

let min=now.getMinutes();

let sec=now.getSeconds();

// Convert to 12-hour format and determine AM/PM
let period = hrs >= 12 ? "PM" : "AM";
hrs = hrs % 12 || 12; // Converts 0 to 12 for midnight

hrs=checkTime(hrs)
min=checkTime(min)
sec=checkTime(sec)

const week =['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
const month =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

document.getElementById('display').innerText=`${hrs}:${min}:${sec}`

document.getElementById('date').innerText=`${week[now.getDay()]}, ${month[now.getMonth() ]} ${now.getDate() } ${now.getFullYear()}`


}
setInterval(startClock, 1000)
startClock()
