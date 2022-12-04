const clock = document.querySelector(".clock")
const Days = document.querySelector(".days")

function getClock(){
    const date = new Date();

    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

function getDays(){
    const newDate = new Date();

    const years = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const days = newDate.getDate();

    Days.innerText =`${years}년 ${month}월 ${days}일`;
}

getClock();
getDays();
setInterval(getClock, 1000);