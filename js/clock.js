const clock = document.querySelector("#clock h1");
// console.log(clock);
 
function getNow(){
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1 ).padStart(2,"0");
    const day = String(today.getDate() ).padStart(2,"0");;
    const hour = String(today.getHours() ).padStart(2,"0");;
    const minute = String(today.getMinutes() ).padStart(2,"0");;
    const second = String(today.getSeconds() ).padStart(2,"0");;

    // console.log(`${year}년 ${month}월 ${day}일  ${hour} : ${minute} : ${second} `);
    clock.innerHTML = `${year}년 ${month}월 ${day}일  ${hour} : ${minute} : ${second} `
}

function getClock(){
    setInterval(getNow, 1000);
}

getClock();