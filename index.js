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

    /* Minor update to get 00 in hours, minutes and seconds before this we get 0, 2,3.. 
    after this chotu sa update we will be getting the 00, 01, 02.... */
    h = (h<10) ? "0"+ h : h;
    m = (m<10) ? "0"+ m : m;
    s = (s<10) ? "0"+ s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    period.innerHTML = ampm;
};
console.log(clock());
setInterval(clock, 1000); /* We use setInterval to update after every second */
