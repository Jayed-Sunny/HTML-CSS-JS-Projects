const inputDate = document.getElementById("input-date")
const btnEl = document.getElementById("btn")
const ageNumber = document.getElementById("con-footer-p")

btnEl.addEventListener("click", () => {
    let x = inputDate.value
    x = x.split("-")
    x = parseInt(x)

    let now = new Date()
    let nowYear = now.getFullYear()

    y = nowYear - x

    ageNumber.innerText = `Your age is ${y} years old.`
})
// console.log(ageNumber)
// Your age is <span id="age-number">00</span> years old.