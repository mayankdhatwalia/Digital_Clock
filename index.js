function clock(){
    let hours = document.getElementById('hours'); /* We get the elements */
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let period = document.getElementById('period');
    
    let h = new Date().getHours(); /* We get hours from system */
    let m = new Date().getMinutes(); /* We get hours from system */
    let s = new Date().getSeconds(); /* We get hours from system */
    let ampm = h >= 12 ? "PM" : "AM"; /* Condition set for am/pm thing */

    if(h > 12){
        h = h - 12; /* Made the clock acc. to 12 hour-clock*/
    }

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    period.innerHTML = ampm;
};
console.log(clock());
setInterval(clock, 1000); /* We use setInterval to update after every second */
