const billAm = document.getElementById("bill-amount")
const billPer = document.getElementById("bill-percentage")
let total = document.getElementById("amount-number")
const btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    a = parseInt(billAm.value)
    b = parseInt(billPer.value)
    sum = a + (a*(b/100))

    total.innerText = sum
})

