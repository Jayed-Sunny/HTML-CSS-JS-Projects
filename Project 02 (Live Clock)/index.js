const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minute")
const secondEl = document.getElementById("second")
let ampmEl = document.getElementById("ampm")

function updateClock() {
    let now = new Date()
    let s = now.getSeconds()
    let m = now.getMinutes()
    let h = now.getHours()

    if (h>12) {
        h = h -12
        ampmEl.innerText = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerHTML = s;

    setTimeout(() => {
        updateClock()
    }, 1000)

    

}
updateClock()