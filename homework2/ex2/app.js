let date = document.getElementById("date");
date.addEventListener("input", startCountDown)
function startCountDown() {
    let startInterval = setInterval(countDown, 1000);
    function countDown() {
       const currentDate =  new Date().getTime();
       console.log(currentDate);
       let countDownDate = Date.parse(date.value)
       console.log(countDownDate);
       let distance = countDownDate - currentDate;
       console.log(distance);
       let days = Math.floor(distance / (1000 * 60 * 60 * 24));
       let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       let seconds = Math.floor((distance % (1000 * 60)) / 1000);

       let d = document.getElementById("days");
       let h = document.getElementById("hours");
       let m = document.getElementById("minutes");
       let s = document.getElementById("seconds");
       d.innerHTML = `${days}`;
       h.innerHTML = `${hours}`;
       m.innerHTML = `${minutes}`;
       s.innerHTML= `${seconds}`;
       if (distance < 0) {
            clearInterval(startInterval);
        }
    }    
}

