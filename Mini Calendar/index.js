const monthName=document.getElementById("month-name");
const dayName= document.getElementById("day-name")
const dayNumber= document.getElementById("day-number");
const YearN= document.getElementById("year");

const date= new Date();
const month=date.getMonth()
monthName.innerText=date.toLocaleString("eng", {
    month:"long"
})
dayName.innerText=date.toLocaleString("eng",{
    weekday:"long"
})
dayNumber.innerText=date.getDate();

YearN.innerText=date.getFullYear(); 
