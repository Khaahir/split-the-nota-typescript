let sum = document.getElementById("sum") as HTMLInputElement
let numberOfFriends = document.getElementById("numberOfFriends") as HTMLInputElement
let tip = document.getElementById("tip") as HTMLInputElement
let calculateButton = document.getElementById("calculateButton") as HTMLButtonElement
let form = document.getElementById("inputForm")
let showSum = document.getElementById("showSum")
let showtotal  = document.querySelector(".show-sum") as HTMLElement


let totaldivided:number
let total:number
let finalsum
calculateButton.addEventListener("click",()=>{
totaldivided = parseInt(sum.value) / parseInt(numberOfFriends.value) * parseFloat( tip.value)
total = parseInt(sum.value) / parseInt(numberOfFriends.value)
console.log(totaldivided);
finalsum = totaldivided + total
console.log(finalsum);
showtotal.innerText = `${finalsum} kr`
form?.classList.add("hide")
showSum?.classList.remove("hide")

})

