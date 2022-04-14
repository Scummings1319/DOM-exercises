function main(){
console.log("click")
document.querySelector(".hello").style.backgroundColor = "orange";
}
function holaparagraph(){
    document.getElementById("hola").style.display = "none";
}

const mouseTarget = document.getElementById('byee');

mouseTarget.addEventListener('mouseenter', e => {
    console.log(e)
 mouseTarget.innerHTML= "HIIIIII!"
});

mouseTarget.addEventListener('mouseleave', e => {
  mouseTarget.innerHTML = "BYEEEEE!"
});

setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();
