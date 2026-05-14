const hourid = document.getElementById("hour")
const minutesid = document.getElementById("minutes")
const secondid = document.getElementById("second")
const ampmid = document.getElementById("ampm")

function updatedClock (){
    let h =  new Date().getHours();
    let m =  new Date().getMinutes();
    let s =  new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h-12;
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s
    
    hourid.innerText = h;
    minutesid.innerText = m;
    secondid.innerText = s;
    ampmid.innerText = ampm;

    setTimeout(()=>{
        updatedClock();
    },1000)

}

updatedClock()